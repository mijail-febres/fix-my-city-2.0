import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { patchToggleUpvote } from "../../../Axios/fetches";
import Navigation from "../../Navigation/Navigation";
import StatusChanger from "./StatusChanger";
import UpvoteSvg from "../../../assets/moredetails/voteup.svg";
import{
  MainContainer,
  SubContainer,
  Title,
  Text,
  IssueImg,
  UpvoteButton,
  CategoryField
} from '../Popup/MoreDetailsStyled';
import {InsectIcon} from "../../IssueList/issuesComponentStyled";
import broken from "../../../assets/images/broken.png";
import damage from "../../../assets/images/damage.png";
import graffiti from "../../../assets/images/graffiti.png";
import insect from "../../../assets/images/insect.png";
import litter from "../../../assets/images/litter.png";
import plant from "../../../assets/images/plant.png";
import streetsign from "../../../assets/images/street-sign.png";

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
          <Title fontSize={"20px"}>{props.title}</Title>
          <Text>
            Reported by: <br/>{" "}
            <span
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#245b55",
                fontSize: "18px",
              }}
              onClick={() => {
                history.push(`/profile/${props.userId}/`);
              }}
            >
              {props.author}<br/>
            </span>{" "}
            on {issueCreated.toLocaleDateString("en-UK")}<br/><br/>
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
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
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
            <CategoryField>
                  {props.category === "insects_and_animals" ? 
                  (<>
                  <InsectIcon src={insect} alt={"insect"}/> 
                  <Text>Insects and Animals</Text> 
                  </>)
                  : " "}
                  {props.category === "graffiti" ? 
                  (<>
                    <InsectIcon src={graffiti} alt={"graffiti"}/> 
                    <Text>Graffiti</Text> 
                    </>)
                  : " "}
                  {props.category === "road_damage" ? 
                   (<>
                    <InsectIcon src={damage} alt={"damage"}/> 
                    <Text>Road Damage</Text> 
                    </>) 
                  : " "}
                  {props.category === "damage_to_public_property" ? 
                    (<>
                    <InsectIcon src={broken} alt={"broken"}/> 
                    <Text>Damage to Public Property</Text> 
                    </>) 
                  : " "}
                  {props.category === "unmaintained_greenery" ? 
                    (<>
                    <InsectIcon src={plant} alt={"plant"}/> 
                    <Text>Unmaintained Greenery</Text> 
                    </>) 
                  : " "}
                  {props.category === "litter" ? 
                    (<>
                    <InsectIcon src={litter} alt={"litter"}/> 
                    <Text>Litter</Text> 
                    </>)                  
                  : " "}
                  {props.category === "street_sign_issues" ? 
                    (<>
                    <InsectIcon src={streetsign} alt={"street sign"}/> 
                    <Text>Street Sign Issues</Text> 
                    </>) 
                  : " "}
          </CategoryField>
        </SubContainer>
        <SubContainer>
          <Title>Description</Title>
          <Text>{props.description}</Text>
        </SubContainer>
        <SubContainer>
          <Title>Location</Title>
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
