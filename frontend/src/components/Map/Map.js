import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactMapGL, {
  Marker,
  Popup,
  //FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  FlyToInterpolator,
} from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./Geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "react-map-gl-geocoder";

import {
  MainContainer,
  MarkerDivStyle,
  MarkerImgStyle,
  SatelliteButton,
} from "./MapStyled";
import { FaSatelliteDish } from "react-icons/fa";
import RedMarker from "../../assets/map/markers/red-marker.png";
import RedishOrangeMarker from "../../assets/map/markers/redish-orange-marker.png";
import OrangeMarker from "../../assets/map/markers/orange-marker.png";
import YellowMarker from "../../assets/map/markers/yellow-marker.png";
import BlueMarker from "../../assets/map/markers/blue-marker.png";
import PopupContent from "./Popup/PopupContent";
import MoreDetails from "./Popup/MoreDetails";
import Navigation from "../Navigation/Navigation";
import { fetchProfileInfo } from "../../Axios/fetches";

const Map = (props) => {
  // Styles to place the buttons somewhere on the map (absolute position)
  /*
  const fullscreenControlStyle = {
    right: 15,
    top: 15,
  };
  */
  const geolocateControlStyle = {
    left: "3%",
    top: "130px",
  };

  const navControlStyle = {
    left: "3%",
    top: "175px",
  };

  const scaleControlStyle = {
    left: "50%",
    transform: "translate(-50%, 0)",
    bottom: "2%",
  };

  // Token for Mapbox (to be able to use Mapbox)
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  // States & Ref & Selectors

  // Initial viewport for the first rendering
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: "100%",
    height: "100%",
    zoom: 15,
  });

  const dispatch = useDispatch();

  // Get token from redux state
  const token = localStorage.getItem("token");

  // Get filter's value from redux state
  const filterValueRedux = useSelector((state) => state.filterReducer.filter);

  // Reference for the map
  const mapRef = useRef();

  // Reference for geocoder
  const geocoderContainerRef = useRef();

  // State to save the selected issue's data for the Popup
  const [selectedIssue, setSelectedIssue] = useState(null);

  // State to save the fetched datas
  const [issues, setIssues] = useState([]);

  // State to save current user's data
  const [currentUser, setCurrentUser] = useState(null);

  // State to save filtered issues
  const [filteredIssues, setFilteredIssues] = useState([]);

  // State to save the converted issues (from json to geojson)
  const [points, setPoints] = useState([]);

  // State to display or not the user's marker
  const [toggleUserMarker, setToggleUserMarker] = useState(false);

  // State to save the user's marker coordinates
  const [userMarker, setUserMarker] = useState(null);

  // Prevents from modifing the cluster from userMarker
  const [expandCluster, setExpandCluster] = useState(false);

  // State to display or not the map in satellite view
  const [toggleSatellite, setToggleSatellite] = useState(false);

  // State to save the map styles
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  );

  // Toggling for refetching the issues
  const [fetchIssues, setFetchIssues] = useState(false);

  // State to display or not the MoreDetails component
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);

  // Functions
  /*
  // Get the current location of the user & Set view (setViewport)
  const current_location = () => {
    if ("geolocation" in navigator) {
      console.log("Geolocation is available");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setViewport({
            ...viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => setViewport({ ...viewport, error: error.message }),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      console.log("Geolocation is not Available");
    }
  };
  */
  // onClick event handle, to get the coordinates if the user clicks on the map and wants to set his/her marker location, hide and set the marker location
  const handleMapClick = ({ lngLat: [longitude, latitude] }) => {
    if (expandCluster === false) {
      if (toggleUserMarker === false) {
        setUserMarker({
          id: "user",
          latitude,
          longitude,
        });
        setToggleUserMarker(true);
        setViewport({
          ...viewport,
          latitude,
          longitude,
          zoom: 19,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 500,
        });
        // } else if (userMarker && toggleUserMarker) {
        //   setUserMarker({
        //     id: "user",
        //     latitude,
        //     longitude,
        //   });
        //   setViewport({
        //     ...viewport,
        //     latitude,
        //     longitude,
        //     zoom: 17,
        //     transitionInterpolator: new FlyToInterpolator(),
        //     transitionDuration: 500,
        //   });
      } else if (toggleUserMarker && userMarker === null) {
        setToggleUserMarker(false);
      }
    } else {
      setExpandCluster(false);
    }
    //setToggleUserMarker(false)
    setSelectedIssue(null);
  };

  // Handle geocoder's viewport change
  const handleGeocoderViewportChange = useCallback((viewport) => {
    /*onViewportChange*/
    //console.log(viewport);
    setToggleUserMarker(false);
    setUserMarker(null);
    setViewport({
      ...viewport,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 500,
    });
  }, []);

  // onClick event handle, to hide user's marker if he/she clicked on a marker or a cluster
  const hideUserMarker = () => {
    setToggleUserMarker(true);
    setUserMarker(null);
  };

  // Random id generator
  const randomId = () => {
    return Math.floor(Math.random() * 10000000) + 1;
  };

  // useEffects

  useEffect(() => {
    const urlIssues = `https://fix-my-city.propulsion-learn.ch/backend/api/issues/`;

    fetch(urlIssues)
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setFilteredIssues(data);
      });
  }, []);

  // Initial useEffect: Get current user's data and fetching in order to get the issues
  useEffect(() => {
    //current_location();
    if (token) {
      const fetchProfile = async () => {
        const data = await fetchProfileInfo();
        setCurrentUser(data);
        console.log(data);
      };
      fetchProfile();
    }
  }, [token]);

  // Fetching issues every time when fetchIssues has been changed
  useEffect(() => {
    const urlIssues = `https://fix-my-city.propulsion-learn.ch/backend/api/issues/`;

    fetch(urlIssues)
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setFilteredIssues(data);
      });

    setSelectedIssue(null);
  }, [fetchIssues]);

  // It keeps the parent component's coordinate state up to date
  // It will be triggered if the userMaker is visible on the map
  useEffect(() => {
    if (toggleUserMarker && userMarker) {
      props.setCoordinates({
        latitude: userMarker.latitude,
        longitude: userMarker.longitude,
      });
    } else {
      props.setCoordinates(null);
    }
  }, [userMarker, toggleUserMarker]);

  // It changes the map style from street to satellite if the satellite button is clicked on the map and back
  useEffect(() => {
    if (toggleSatellite) {
      setMapStyle("mapbox://styles/mapbox/satellite-streets-v11");
    } else {
      setMapStyle("mapbox://styles/mapbox/streets-v11");
    }
  }, [toggleSatellite]);

  // Unmount: Set filter's value back to "default"
  useEffect(() => {
    return () => {
      dispatch({
        type: "applyFilter",
        payload: "default",
      });
    };
  }, []);

  // Filtering
  useEffect(() => {
    if (filterValueRedux === "default") {
      setFilteredIssues(issues);
    } else {
      const filteredArray = issues.filter(
        (issue) => issue.category === filterValueRedux
      );
      if (filteredArray.length >= 1) {
        setFilteredIssues(
          issues.filter((issue) => issue.category === filterValueRedux)
        );
      } else {
        setFilteredIssues([]);
      }
    }

    setSelectedIssue(null);

    if (viewport.zoom >= 10) {
      setViewport({
        ...viewport,
        zoom: 12,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 500,
      });
    }
  }, [filterValueRedux]);

  // Clustering

  // Prepare data for clustering (from json to geojson)
  useEffect(() => {
    if (filteredIssues.length > 0) {
      setPoints(
        filteredIssues.map((issue) => ({
          type: "Feature",
          properties: {
            cluster: false,
            issueId: issue.id,
            title: issue.title,
            image: issue.image,
            city: issue.city,
            zip: issue.zip,
            streetAndNumber: issue.adress,
            category: issue.category,
            author: issue.user.username,
            userId: issue.user.id,
            created: issue.created,
            upvoteCount: issue.upvote_count,
            upvotedBy: issue.upvoted_by,
            status: issue.status,
            description: issue.content,
          },
          geometry: {
            type: "Point",
            coordinates: [issue.longitude, issue.latitude],
          },
        }))
      );
    }
  }, [filteredIssues]);

  // Get map bounds
  const bounds =
    mapRef.current && mapRef.current.getMap().getBounds().toArray().flat();

  // Get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 50, maxZoom: 20 },
  });

  return (
    <>
      <MainContainer height={props.height} width={props.width}>
        <Navigation position="absolute" />
        <div ref={geocoderContainerRef} />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={mapStyle}
          onClick={handleMapClick}
          onViewportChange={(viewport) => {
            if (toggleUserMarker && userMarker) {
              setViewport({
                ...viewport,
                latitude: userMarker.latitude,
                longitude: userMarker.longitude,
                zoom: 19,
                transitionInterpolator: new FlyToInterpolator(),
                transitionDuration: 500,
              });
            }
            setViewport(viewport);
          }}
          scrollZoom={toggleUserMarker && userMarker ? false : true}
          touchZoom={toggleUserMarker && userMarker ? false : true}
          doubleClickZoom={toggleUserMarker && userMarker ? false : true}
          width="100%"
          height="100%"
          maxZoom={20}
          ref={mapRef}
        >
          <Geocoder
            mapRef={mapRef}
            containerRef={geocoderContainerRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            zoom={17}
            marker={false}
          />
          {/*<FullscreenControl style={fullscreenControlStyle} />*/}
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showAccuracyCircle={false}
            fitBoundsOptions={{ maxZoom: 17 }}
            auto
          />
          <NavigationControl style={navControlStyle} />
          <ScaleControl
            maxWidth={100}
            unit="metric"
            style={scaleControlStyle}
          />
          <SatelliteButton
            onClick={() => {
              setExpandCluster(true);
              setToggleSatellite(!toggleSatellite);
            }}
          >
            <FaSatelliteDish
              style={{ width: "15px", height: "15px", marginTop: "3px" }}
            />
          </SatelliteButton>
          {filteredIssues.length >= 1 &&
            clusters.map((cluster) => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const { cluster: isCluster, point_count: pointCount } =
                cluster.properties;

              // Clustering
              // It creates clusters if there is more than 1 marker in radius: 75 (check useSupercluster)
              if (isCluster) {
                return (
                  <Marker
                    key={`${cluster.id}-${randomId()}`}
                    latitude={latitude}
                    longitude={longitude}
                    offsetLeft={
                      -1 * ((14 + (pointCount / points.length) * 30) / 2)
                    }
                    offsetTop={
                      -1 * ((14 + (pointCount / points.length) * 30) / 2)
                    }
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: new FlyToInterpolator(),
                        transitionDuration: 500,
                      });
                      setExpandCluster(true);
                    }}
                  >
                    <MarkerDivStyle
                      height={`${14 + (pointCount / points.length) * 30}px`}
                      width={`${14 + (pointCount / points.length) * 30}px`}
                      lineHeight={`${
                        14 + (pointCount / points.length) * 30 + 1
                      }px`}
                      onClick={(e) => {
                        e.preventDefault();
                        hideUserMarker();
                      }}
                    >
                      {pointCount}
                    </MarkerDivStyle>
                  </Marker>
                );
              }
              // It creates markers if there is no more than 1 cluster in radius: 75 (check useSupercluster)
              return (
                filteredIssues.length >= 1 && (
                  <Marker
                    key={cluster.properties.issueId}
                    latitude={latitude}
                    longitude={longitude}
                    offsetLeft={-18}
                    offsetTop={-30}
                  >
                    <MarkerImgStyle
                      src={
                        cluster.properties.upvoteCount >= 3
                          ? cluster.properties.upvoteCount >= 10
                            ? RedMarker
                            : cluster.properties.upvoteCount >= 5
                            ? RedishOrangeMarker
                            : OrangeMarker
                          : YellowMarker
                      }
                      alt="marker"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedIssue(cluster);
                        hideUserMarker();
                        setViewport(
                          viewport.zoom < 17
                            ? {
                                ...viewport,
                                latitude,
                                longitude,
                                zoom: 17,
                                transitionInterpolator: new FlyToInterpolator(),
                                transitionDuration: 500,
                              }
                            : {
                                ...viewport,
                                latitude,
                                longitude,
                                transitionInterpolator: new FlyToInterpolator(),
                                transitionDuration: 500,
                              }
                        );
                      }}
                    />
                  </Marker>
                )
              );
            })}
          {
            // It displays the Popup with datas in it for the marker if the user has clicked on one
            selectedIssue && (
              <Popup
                latitude={selectedIssue.geometry.coordinates[1]}
                longitude={selectedIssue.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedIssue(null);
                }}
                closeOnClick={false}
                closeButton={true}
                offsetTop={-20}
              >
                <PopupContent
                  upvoteCount={selectedIssue.properties.upvoteCount}
                  title={selectedIssue.properties.title}
                  author={selectedIssue.properties.author}
                  created={selectedIssue.properties.created}
                  status={selectedIssue.properties.status}
                  setToggleMoreDetails={setToggleMoreDetails}
                />
              </Popup>
            )
          }
          {
            // It displays the user's marker if the user has clicked on somewhere on the map
            toggleUserMarker && userMarker && (
              <Marker
                key={userMarker.id}
                latitude={userMarker.latitude}
                longitude={userMarker.longitude}
                offsetLeft={-18}
                offsetTop={-30}
              >
                <MarkerImgStyle
                  src={BlueMarker}
                  alt="marker"
                  onClick={(e) => {
                    e.preventDefault();
                    hideUserMarker();
                    setViewport({
                      ...viewport,
                      latitude: userMarker.latitude,
                      longitude: userMarker.longitude,
                      zoom: 17,
                      transitionInterpolator: new FlyToInterpolator(),
                      transitionDuration: 500,
                    });
                  }}
                  style={{ cursor: "auto" }}
                />
              </Marker>
            )
          }
        </ReactMapGL>
      </MainContainer>
      {toggleMoreDetails && (
        <MoreDetails
          setToggleMoreDetails={setToggleMoreDetails}
          setFetchIssues={setFetchIssues}
          fetchIssues={fetchIssues}
          issueId={selectedIssue.properties.issueId}
          title={selectedIssue.properties.title}
          author={selectedIssue.properties.author}
          userId={selectedIssue.properties.userId}
          currentUser={currentUser}
          created={selectedIssue.properties.created}
          upvoteCount={selectedIssue.properties.upvoteCount}
          upvotedBy={selectedIssue.properties.upvotedBy}
          status={selectedIssue.properties.status}
          category={selectedIssue.properties.category}
          image={selectedIssue.properties.image}
          description={selectedIssue.properties.description}
          streetAndNumber={selectedIssue.properties.streetAndNumber}
          zip={selectedIssue.properties.zip}
          city={selectedIssue.properties.city}
        />
      )}
    </>
  );
};

export default Map;
