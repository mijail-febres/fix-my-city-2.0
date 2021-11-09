import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainContainer } from "./CreateIssueStyled";
import {
  StepOneContainer,
  StepTwoContainer,
  StepThreeContainer,
  ReviewContainer,
  Box,
  ThankYouContainer,
  SomethingWentWrongContainer,
  NextButton,
  Arrow,
  SendButton,
  HomeButton,
  PageTitle,
} from "./CreateIssueStyled";
import Camera from "../../components/Camera/Camera";
import { useSelector } from "react-redux";
import { StaticMap, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MarkerImgStyle } from "../../components/Map/MapStyled";
import Navigation from "../../components/Navigation_CreateIssue/NavigationCreateIssue";
import Sad from "../../assets/images/sad.png";
import Confirmation from "../../assets/images/confirmation.png";
import { createIssue } from "../../Axios/fetches";
import svgNewMarker from "../../assets/svgs/new-marker.svg";
import rightarrow from "../../assets/images/arrow-right.png";
import { distanceTwoPoints } from "../../components/Map/Calculations";

const StepOne = (props) => {
  const pinnedCoordinates = useSelector(
    (state) => state.createIssueCoordinatesReducer.coordinates
  );
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  return (
    <>
      <StepOneContainer>
        {
          //<div id="step1">
        }
        <StaticMap
          key={"map"}
          width={"90%"}
          height={"70%"}
          latitude={pinnedCoordinates.latitude}
          longitude={pinnedCoordinates.longitude}
          zoom={19}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={"mapbox://styles/mapbox/streets-v11"}
        >
          <Marker
            key={"userMarker"}
            latitude={pinnedCoordinates.latitude}
            longitude={pinnedCoordinates.longitude}
            offsetLeft={-16}
            offsetTop={-30}
          >
            <MarkerImgStyle
              image={svgNewMarker}
              alt="marker"
              style={{ cursor: "auto" }}
            />
          </Marker>
        </StaticMap>
        <p>
          {props.address} <br></br> {props.postcode} {props.city}
        </p>
        {
          //</div>
        }
      </StepOneContainer>
    </>
  );
};

const StepTwo = (props) => {
  return (
    <>
      <StepTwoContainer>
        <h3 className="pageTitle">Share a picture of the issue with us</h3>
        <Camera
          imageURL={props.imageURL}
          setImageURL={props.setImageURL}
          setImageFile={props.setImageFile}
        ></Camera>
      </StepTwoContainer>
    </>
  );
};

const StepThree = (props) => {
  const selectCategoryOnChangeHandler = (e) => {
    props.setCategory(e.target.value);
  };

  const descriptionOnChangeHandler = (e) => {
    props.setDescription(e.target.value);
  };

  const titleOnChangeHandler = (e) => {
    props.setTitle(e.target.value);
  };

  return (
    <>
      <StepThreeContainer>
        <h3 className="pageTitle">Tell us more about this issue:</h3>
        <div id="titleCategoryDescriptionContainer">
          <div id="titleContainer">
            <h3 className="fieldHeader">Title*:</h3>
            <input
              id="title"
              type="text"
              value={props.title}
              onChange={titleOnChangeHandler}
            ></input>
          </div>
          <div id="categoryContainer">
            <h3 className="fieldHeader">Category*:</h3>
            <select
              id="selectCategory"
              defaultValue={props.category === "" ? "default" : props.category}
              onChange={selectCategoryOnChangeHandler}
            >
              <option value="default">--select--</option>
              <option value="graffiti">Graffiti</option>
              <option value="damage_to_public_property">Damage to Public Property</option>
              <option value="litter">Litter</option>
              <option value="road_damage">Road Damage</option>
              <option value="insects_and_animals">Insects and Animals</option>
              <option value="unmaintained_greenery">Unmaintained Greenery</option>
              <option value="street_sign_issues">Street Sign Issues</option>
            </select>
          </div>
          <div id="descriptionContainer">
            <h3 className="fieldHeader">Description:</h3>
            <textarea
              id="description"
              type="text"
              value={props.description}
              onChange={descriptionOnChangeHandler}
            ></textarea>
            {/*<textarea
              rows="10"
              cols="37"
              value={props.description}
              onChange={descriptionOnChangeHandler}
            ></textarea>*/}
          </div>
        </div>
      </StepThreeContainer>
    </>
  );
};

const Review = (props) => {
  return (
    <>
      <ReviewContainer>
        <PageTitle>Review and send to us! :)</PageTitle>
        <div id="reviewContainerBox">
          <div className="itemTitleText">
            <h3 className="itemTitle" id="powerTitle">
              {props.title}
            </h3>
            <p className="itemText">
              {" "}
              @{props.address}, {props.postcode}, {props.city}
            </p>
          </div>
          <Box>
            <img
              id="selectedImage"
              src={props.imageURL}
              alt="selected_image"
            ></img>
          </Box>
          <div className="itemTitleText">
            <h3 className="itemTitle">Category</h3>
            <p className="itemText">
              {props.category === "insects_and_animals" ? "Insects and Animals" : " "}
              {props.category === "graffiti" ? "Graffiti" : " "}
              {props.category === "road_damage" ? "Road Damage" : " "}
              {props.category === "damage_to_public_property" ? "Damage to Public Property" : " "}
              {props.category === "unmaintained_greenery" ? "Unmaintained Greenery" : " "}
              {props.category === "litter" ? "Litter" : " "}
              {props.category === "street_sign_issues" ? "Street Sign Issues" : " "}
              </p>
          </div>
          {props.description ? (
            <div className="itemTitleText">
              <h3 className="itemTitle">Description</h3>
              <p className="itemText">{props.description}</p>
            </div>
          ) : null}
        </div>
      </ReviewContainer>
    </>
  );
};

const ThankYouPage = () => {
  return (
    <ThankYouContainer>
      <img src={Confirmation} id="confirmationIcon" alt="confirmation"></img>
      <p id="message">
        Thank you! <br></br> For making your city a better place to live in :)
      </p>
    </ThankYouContainer>
  );
};

const SomethingWentWrongPage = () => {
  return (
    <SomethingWentWrongContainer>
      <img id="sad" src={Sad} alt="sad"></img>
      <p id="message">Oops... something went wrong. Please try again</p>
    </SomethingWentWrongContainer>
  );
};

const CreateIssue = () => {
  const pinnedCoordinates = useSelector(
    (state) => state.createIssueCoordinatesReducer.coordinates
  );

  const history = useHistory();
  const [fetchAddress, setFetchAddress] = useState("");

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  const [listUsers,setListUsers] = useState(null);

  const getListUsers = async() => {
      const url = 'https://fix-my-city.app.propulsion-learn.ch/backend/api/users/';

      const method = 'GET'; // method

      const config = { // configuration
      method : method,
      }

      const response = await fetch(url, config);  //fetching
      const data     = await response.json();  // getting the user

      setListUsers(data)
  }

  useEffect(() => {
    getListUsers();
  }, [])

  const findUsersClosetoThisIssue = (longitude,latitude) => {
    const min_distance = 0.2 //200m?? good?

    const lat1 = latitude * Math.PI;
    const lng1 = longitude * Math.PI;

    let usersToNotify = [];
    listUsers.forEach(user => {
      const lat2 = user.home_latitude * Math.PI;
      const lng2 = user.home_longitude * Math.PI;
      ;
      if (distanceTwoPoints(lat1, lng1, lat2, lng2)<= min_distance) {
        usersToNotify.push(user);  
      }
    })
    console.log('users',usersToNotify)
  }

  useEffect(() => {
    console.log(pinnedCoordinates);
    setLatitude(pinnedCoordinates.latitude);
    setLongitude(pinnedCoordinates.longitude);
  }, [pinnedCoordinates]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pinnedCoordinates.longitude}%2C%20${pinnedCoordinates.latitude}.json?access_token=${MAPBOX_TOKEN}`;

      await fetch(url)
        .then((res) => res.json())
        //.then((data) => setFetchAddress(data.features[0].place_name));

        .then((data) => {
          setAddress(data.features[0].place_name.split(",")[0]);
          setPostCode(data.features[0].place_name.split(",")[1].split(" ")[1]);
          setCity(data.features[0].place_name.split(",")[1].split(" ")[2]);
        });
    };

    fetchData();
  }, [pinnedCoordinates.latitude, pinnedCoordinates.longitude]);

  const [toggleShowStep1, setToggleShowStep1] = useState(true);
  const [toggleShowStep2, setToggleShowStep2] = useState(false);
  const [toggleShowStep3, setToggleShowStep3] = useState(false);
  const [toggleShowReview, setToggleShowReview] = useState(false);
  const [toggleShowThankYou, setToggleShowThankyou] = useState(false);
  const [toggleShowSomethingWentWrong, setShowToggleShowSomethingWentWrong] =
    useState(false);
  //const [toggleIsPageComplete, setToggleIsPageComplete] = useState(false);
  //const [toggleIsStepOneComplete, setToggleIsStepOneComplete] = useState(false);
  const [toggleShowNavigation, setToggleShowNavigation] = useState(true);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const nextButtonHandler = () => {
    if (
      toggleShowStep1 === true &&
      !(toggleShowStep2 && toggleShowStep3 && toggleShowReview)
    ) {
      setToggleShowStep1(false);
      setToggleShowStep2(true);
    }
    if (
      toggleShowStep2 === true &&
      !(toggleShowStep1 && toggleShowStep3 && toggleShowReview)
    ) {
      if (imageURL) {
        setToggleShowStep2(false);
        setToggleShowStep3(true);
      } else {
        window.alert(
          "Please upload a picture so we can better identify the issue :)"
        );
      }
    }
    if (
      toggleShowStep3 === true &&
      !(toggleShowStep1 && toggleShowStep2 && toggleShowReview)
    ) {
      if (title && category) {
        setToggleShowStep3(false);
        setToggleShowReview(true);
        console.log(
          "At this stage, the following is stored in the state:",
          "\n\n",
          `title: ${title}`,
          "\n",
          `address: ${address}`,
          "\n",
          `city: ${city}`,
          "\n",
          `postcode: ${postcode}`,
          "\n",
          `image: ${imageURL}`,
          "\n",
          `category: ${category}`,
          "\n",
          `description: ${description}`
        );
      } else {
        window.alert("Please send us at least a 'title' and a 'category' :)");
      }
    }
  };

  const homeOnClickHandler = () => {
    history.push("/");
  };

  const sendOnClickHandler = async () => {
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("longitude", longitude);
    formdata.append("latitude", latitude);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("zip", postcode);
    formdata.append("category", category);
    formdata.append("image", imageFile);
    formdata.append("content", description);

    try {
      const resp = await createIssue(formdata);
      if (resp.status === 201) {
        console.log("Success.");
        setToggleShowReview(false);
        setToggleShowNavigation(false);
        setToggleShowThankyou(true);
        // find user(s) close to this new issue
        findUsersClosetoThisIssue(longitude,latitude);
      }
    } catch (err) {
      if (err) {
        console.log(err.response);
        setToggleShowReview(false);
        setToggleShowNavigation(false);
        setShowToggleShowSomethingWentWrong(true);
      }
    }
  };

  return (
    <MainContainer>
      {toggleShowNavigation === true ? (
        <Navigation
          setToggleShowNavigation={setToggleShowNavigation}
          showBackButton={true}
          toggleShowStep1={toggleShowStep1}
          setToggleShowStep1={setToggleShowStep1}
          toggleShowStep2={toggleShowStep2}
          setToggleShowStep2={setToggleShowStep2}
          toggleShowStep3={toggleShowStep3}
          setToggleShowStep3={setToggleShowStep3}
          toggleShowReview={toggleShowReview}
          setToggleShowReview={setToggleShowReview}
          toggleShowSomethingWentWrong={toggleShowSomethingWentWrong}
          setShowToggleShowSomethingWentWrong={
            setShowToggleShowSomethingWentWrong
          }
        />
      ) : null}
      {toggleShowStep1 === true ? (
        <StepOne address={address} postcode={postcode} city={city} />
      ) : null}
      {toggleShowStep2 === true ? (
        <>
          <StepTwo
            setImageURL={setImageURL}
            imageURL={imageURL}
            setImageFile={setImageFile}
          />
        </>
      ) : null}
      {toggleShowStep3 === true ? (
        <>
          <StepThree
            category={category}
            setCategory={setCategory}
            description={description}
            setDescription={setDescription}
            title={title}
            setTitle={setTitle}
          />
        </>
      ) : null}
      {toggleShowReview === true ? (
        <>
          <Review
            imageURL={imageURL}
            title={title}
            address={address}
            postcode={postcode}
            city={city}
            category={category}
            description={description}
          />
        </>
      ) : null}
      {toggleShowThankYou === true ? <ThankYouPage /> : null}
      {toggleShowSomethingWentWrong === true ? (
        <SomethingWentWrongPage />
      ) : null}
      <div id="footer" style={{backgroundColor:'#f5f5f5'}}>
        <div id="buttonsContainer">
          {toggleShowReview === false &&
          toggleShowSomethingWentWrong === false &&
          toggleShowThankYou === false ? (
            <NextButton onClick={nextButtonHandler}>
              Next
              <Arrow src={rightarrow} alt="next"/>
            </NextButton>
          ) : null}

          {toggleShowReview === true ? (
            <SendButton onClick={sendOnClickHandler}>
              Send
            </SendButton>
          ) : null}
          {toggleShowSomethingWentWrong === true ||
          toggleShowThankYou === true ? (
            <HomeButton onClick={homeOnClickHandler}>
              Home
            </HomeButton>
          ) : null}
        </div>
      </div>
    </MainContainer>
  );
};

export default CreateIssue;
