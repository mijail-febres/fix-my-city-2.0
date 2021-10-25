import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { patchToggleUpvote } from "../../../Axios/fetches";
import Navigation from "../../Navigation/Navigation";
import StatusChanger from "./StatusChanger";
import UpvoteSvg from "../../../assets/moredetails/voteup.svg";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100%;
  background-color: #ffffff;

  position: absolute;
  z-index: 5;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

const SubContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "35px"};

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: bold;
  color: #e26236;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
`;

const Text = styled.p`
  font-size: ${(props) => props.fontSize || "19px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const IssueImg = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const UpvoteButton = styled.button`
  height: 50px;
  width: 45%;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  outline-style: none;
  border: 3px solid ${(props) => props.theme.yellowColor};
  border-radius: 5px;
  font-size: 19px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreDetails = (props) => {
  console.log(props);
  const issueCreated = new Date(props.created);

  const history = useHistory();

  const [status, setStatus] = useState(props.status);

  const initialUpvoted = props.upvotedBy.find(
    (id) => id === props.currentUser.id
  )
    ? true
    : false;

  const [upvoted, setUpvoted] = useState(initialUpvoted);

  const handleUpvote = () => {
    setUpvoted(!upvoted);
    patchToggleUpvote(props.issueId);
  };

  return (
    <MainContainer>
      <Navigation
        showBackButton={true}
        setToggleMoreDetails={props.setToggleMoreDetails}
        setFetchIssues={props.setFetchIssues}
        fetchIssues={props.fetchIssues}
        page={"MoreDetails"}
        setToggleShowIssues={
          props.setToggleShowIssues && props.setToggleShowIssues
        }
      />
      <SubContainer width={"79%"} alignItems={"center"} marginBottom={"0px"}>
        <SubContainer marginTop={"15px"}>
          <Title fontSize={"30px"}>{props.title}</Title>
          <Text>
            Reported by{" "}
            <span
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "19px",
              }}
              onClick={() => {
                history.push(`/profile/${props.userId}/`);
              }}
            >
              {props.author}
            </span>{" "}
            on {issueCreated.toLocaleDateString("en-UK")}
          </Text>
          <Text>
            {initialUpvoted
              ? upvoted
                ? props.upvoteCount
                : props.upvoteCount - 1
              : upvoted
              ? props.upvoteCount + 1
              : props.upvoteCount}{" "}
            Upvotes
          </Text>
          <Text>
            Status:{" "}
            <span style={{ fontWeight: "bold", fontSize: "19px" }}>
              {status}
            </span>
          </Text>
        </SubContainer>
        <SubContainer
          style={{ height: "200px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IssueImg src={props.image} alt="image of the issue" />
        </SubContainer>
        <SubContainer>
          <Title>Category</Title>
          <Text>{props.category}</Text>
        </SubContainer>
        <SubContainer>
          <Title>Description</Title>
          <Text>{props.description}</Text>
        </SubContainer>
        <SubContainer>
          <Title>Where</Title>
          <Text>{props.streetAndNumber}</Text>
          <Text>
            {props.zip} {props.city}
          </Text>
        </SubContainer>
        <SubContainer flexDirection={"row"} justifyContent={"space-around"}>
          <UpvoteButton
            onClick={handleUpvote}
            backgroundColor={upvoted ? "#F8CE46" : "#FFFFFF"}
          >
            <img
              src={UpvoteSvg}
              alt="upvote icon"
              style={{ marginRight: "7px" }}
            />{" "}
            Up-vote
          </UpvoteButton>
          {props.currentUser !== undefined ? (
            props.currentUser.is_superuser ? (
              <StatusChanger
                superUser={true}
                setStatus={setStatus}
                issueId={props.issueId}
              />
            ) : props.userId === props.currentUser.id ? (
              <StatusChanger setStatus={setStatus} issueId={props.issueId} />
            ) : null
          ) : null}
        </SubContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default MoreDetails;
