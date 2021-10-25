import React, { useState } from "react";
import styled from "styled-components";
import { patchIssue } from "../../../Axios/fetches";
import StatusSvg from "../../../assets/moredetails/status.svg";

const MainContainer = styled.div`
  width: 60%;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.yellowColor};
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const SubContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${props.theme.yellowColor}`};
  border-top: ${(props) =>
    props.borderTop || `3px solid ${props.theme.yellowColor}`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 19px;
  font-weight: bold;
  text-align: center;
`;

const StatusButton = styled.button`
  height: 50px;
  width: 45%;
  background-color: #ffffff;
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
