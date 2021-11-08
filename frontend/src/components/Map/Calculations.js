  import { WebMercatorViewport } from "react-map-gl";

  export const getBoundsFromLatLng = (lng, lat, radius) => {
    let R = 6371;  // earth radius in km
    let latMin = lat - radius/R*180.0/Math.PI;
    let latMax = lat + radius/R*180.0/Math.PI;
    let lngMin = lng - (radius/R/Math.cos(lat*Math.PI/180.0))*180.0/Math.PI;
    let lngMax = lng + (radius/R/Math.cos(lat*Math.PI/180.0))*180.0/Math.PI;

    return [[latMin, lngMin], [latMax, lngMax]];
  }

  export const findCentroid = (listIssues) => {
    let centroid = [0.0, 0.0];
    let minMaxLat = [];
    let minMaxLng = [];

    minMaxLat = listIssues.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val.latitude < acc[0] ) ? val.latitude : acc[0]
        acc[1] = ( acc[1] === undefined || val.latitude > acc[1] ) ? val.latitude : acc[1]
        return acc;
    }, []);

    minMaxLng = listIssues.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val.longitude < acc[0] ) ? val.longitude : acc[0]
        acc[1] = ( acc[1] === undefined || val.longitude > acc[1] ) ? val.longitude : acc[1]
        return acc;
    }, []);

    centroid[0] = 0.5 * (minMaxLat[0] + minMaxLat[1]);
    centroid[1] = 0.5 * (minMaxLng[0] + minMaxLng[1]);

    return centroid;
  }

  export const minMax = (items) => {
    return items.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
        acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
        return acc;
    }, []);
  }

  export const getBoundsFromMarkers = (list_markers, dist) => {
    let latMin = 1000000;
    let latMax = -1000000;
    let lngMin = 1000000;
    let lngMax = -1000000;
    let R = 6371;  // earth radius in km

    for (let i=0; i < list_markers.length; i++) {
      latMin = Math.min(latMin,list_markers[i].latitude);
      latMax = Math.max(latMax,list_markers[i].latitude);
      lngMin = Math.min(lngMin,list_markers[i].longitude);
      lngMax = Math.max(lngMax,list_markers[i].longitude);
    }

    return [[lngMin, latMin], [lngMax, latMax]];
  } 

  export const getViewPort = (lat, long, dist, viewport=null) => {
    const boxy = getBoundsFromLatLng(lat, long, dist);
    // let loc_viewport;
    // if (viewport) {
    //   loc_viewport = new WebMercatorViewport({ width: viewport.width, height: viewport.height }).fitBounds(boxy)
    // } else {
      const loc_viewport = new WebMercatorViewport({ width: 800, height: 600 }).fitBounds(boxy)
    // }
    const { longitude, latitude, zoom } = loc_viewport
    return { longitude, latitude, zoom };
  };

  export const findMaxDist = (issues, [cLat, cLng]) => {
    let dist = -1000000000;
    const cLatrad = cLat * Math.PI / 180.0;
    const cLngrad = cLng * Math.PI / 180.0;
    for (let i=0; i<issues.length; i++) {
      let lat2 = issues[i].latitude * Math.PI / 180.0;
      let lng2 = issues[i].longitude * Math.PI / 180.0;
      dist=Math.max(dist,distanceTwoPoints(cLatrad,cLngrad,lat2,lng2));
    }
    return dist + 0.02; // plus 20 meters, for visualization purposes
  }

  export const distanceTwoPoints = (lat1, lng1, lat2, lng2) => {
    // lat1,lng1,lat2,lng2, are given in rads
    const R = 6371; //Earth 'constant' radius
    // Haversine formula
    return 2.0*R*Math.asin(Math.sqrt(Math.sin(0.5*(lat2-lat1))*Math.sin(0.5*(lat2-lat1))
                                                 +Math.cos(lat1)*Math.cos(lat2)
                                                 *Math.sin(0.5*(lng2-lng1))*Math.sin(0.5*(lng2-lng1))));
  }