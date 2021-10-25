import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from "./PrototypeStyled";
import Map from "../../components/Map/Map";
import Camera from "../../components/Camera/Camera";
import Axios from "../../helpers/axios";

const CreateIssuePrototype = () => {
  const dispatch = useDispatch();
  const newIssue = useSelector((state) => state.createIssueReducer);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  const [description, setDescription] = useState("");

  const descriptionOnChangeHandler = (e) => {
    setDescription(e.target.value);
    dispatch({ type: "setDescription", payload: e.target.value });
    //console.log(description);
  };

  const sendOnClickHandler = async () => {
    //console.log("you hit me");
    const url = "/issues/new/";
    const postmanToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1OTA1MjUyLCJqdGkiOiJhYTc1MzYzMDg2MTI0Njc2YWUwN2Q0ZGNiZjMzYjJiNCIsInVzZXJfaWQiOjF9.VxgsPFdpfITUCCRKQFFHSiEMGknNT6_h0TC0AX9W_b0";

    let formdata = new FormData();
    formdata.append("title", newIssue.title);
    formdata.append("longitude", newIssue.longitude);
    formdata.append("latitude", newIssue.latitude);
    formdata.append("image", newIssue.image);
    formdata.append("content", newIssue.content);
    formdata.append("city", newIssue.city);
    formdata.append("zip", newIssue.zip);

    const config = {
      headers: {
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: `Bearer ${postmanToken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const resp = await Axios.post(url, formdata, config);
      if (resp.status === 201) {
        console.log("Success.");
      }
    } catch (err) {
      if (err) {
        console.log(err.response);
      }
    }
  };

  return (
    <MainContainer>
      <h1>Create issue</h1>
      <Map height={"800px"} width={"500px"} setCoordinates={setCoordinates} />
      <h3>Title</h3>
      <Camera></Camera>
      <h3>Description</h3>
      <textarea
        rows="10"
        cols="40"
        onChange={descriptionOnChangeHandler}
      ></textarea>
      <button onClick={sendOnClickHandler}>SEND</button>
    </MainContainer>
  );
};

export default CreateIssuePrototype;
