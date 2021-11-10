import React, { useState } from "react";
import styled from "styled-components";
import { patchIssue } from "../../../Axios/fetches";
import StatusSvg from "../../../assets/moredetails/status.svg";

const MainContainer = styled.div`
  width: 30%;
  border-radius: 5px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* position: absolute;
  left: 80%;
  bottom: 10vh; */
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 20px;   
  border: 2px solid ${(props) => props.theme.greenColor};
  color: white;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
        cursor: pointer;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    }
`;

const Text = styled.p`
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  &:hover {
        cursor: pointer;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
        color: ${(props) => props.theme.greenColor};
    }
`;

const StatusButton = styled.button`
    display:flex;
    width: 200px;
    height: 39px;
    border-radius: 20px;   
    background-color: ${(props) => props.theme.greenColor};
    color: white;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
    cursor: pointer;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`;

const StatusChanger = (props) => {
  const [toggleStatusButton, setToggleStatusButton] = useState(false);

  const handleToggleButton = () => {
    setToggleStatusButton(!toggleStatusButton);
  };

  const handleOpen = () => {
    setToggleStatusButton(false);
    props.setStatus("open");
    patchIssue(props.issueId, "open");
  };

  const handleResolved = () => {
    setToggleStatusButton(false);
    props.setStatus("resolved");
    patchIssue(props.issueId, "resolved");
  };

  const handleInProgress = () => {
    setToggleStatusButton(false);
    props.setStatus("in progress");
    patchIssue(props.issueId, "in progess");
  };

  return (
    <>
      <StatusButton onClick={handleToggleButton}>
        {" "}
        <img
          src={StatusSvg}
          alt="status icon"
          style={{ height: "32px", marginTop: "5px", marginRight: "7px" }}
        />{" "}
        Status
      </StatusButton>
      {toggleStatusButton && (
        <MainContainer>
          <SubContainer borderTop={"none"} onClick={handleOpen}>
            <Text>open</Text>
          </SubContainer>
          <SubContainer
            borderBottom={"none"}
            borderTop={"none"}
            onClick={handleResolved}
          >
            <Text>resolved</Text>
          </SubContainer>
          {props.superUser && (
            <SubContainer borderBottom={"none"} onClick={handleInProgress}>
              <Text>in progress</Text>
            </SubContainer>
          )}
        </MainContainer>
      )}
    </>
  );
};

export default StatusChanger;
