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
} from "./CreateIssueStyled";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Map from "../../components/Map/Map";
import Camera from "../../components/Camera/Camera";
import Axios from "../../Axios/index";
import { useSelector } from "react-redux";
import { StaticMap, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MarkerImgStyle } from "../../components/Map/MapStyled";
import BlueMarker from "../../assets/map/markers/blue-marker.png";
import reviewAddress from "../../assets/images/review_address.png";
import reviewCategory from "../../assets/images/review_category.png";
import reviewTitle from "../../assets/images/review_title.png";
import reviewDescription from "../../assets/images/review_description.png";
import confirmation from "../../assets/svgs/confirmation.svg";
import Navigation from "../../components/Navigation_CreateIssue/NavigationCreateIssue";
import Sad from "../../assets/images/sad.png";
import Confirmation from "../../assets/images/confirmation.png";
import Div100vh from "react-div-100vh";
import { createIssue } from "../../Axios/fetches";

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
              src={BlueMarker}
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
              <option>graffiti</option>
              <option>damages</option>
              <option>insects and animals</option>
              <option>items with no owner</option>
              <option>litter</option>
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
        <h3 className="pageTitle">Review and send to us! :)</h3>
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
            <p className="itemText">{props.category}</p>
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
    formdata.append("adress", address);
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
      <div id="footer" style={{backgroundColor:toggleShowThankYou===true?'#F8CE46':'white'}}>
        <div id="buttonsContainer">
          {toggleShowReview === false &&
          toggleShowSomethingWentWrong === false &&
          toggleShowThankYou === false ? (
            <button id="nextButton" onClick={nextButtonHandler}>
              Next
            </button>
          ) : null}

          {toggleShowReview === true ? (
            <button id="sendButton" onClick={sendOnClickHandler}>
              Send
            </button>
          ) : null}
          {toggleShowSomethingWentWrong === true ||
          toggleShowThankYou === true ? (
            <button id="homeButton" onClick={homeOnClickHandler}>
              Home
            </button>
          ) : null}
        </div>
      </div>
    </MainContainer>
  );
};

export default CreateIssue;
