import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${(props) => props.theme.greenColor};
`;

const Text = styled.p`
  font-size: ${(props) => props.fontSize || "13px"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "normal"};

  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const MoreDetailsLink = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGreenColor};

  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};

  :hover {
    text-decoration: underline;
  }
`;

const PopupContent = (props) => {
  const issueCreated = new Date(props.created);

  return (
    <>
      <MainContainer>
        <Title>{props.title}</Title>
        <Text fontStyle={"italic"} fontSize={"11px"} marginBottom={"10px"}>
          {issueCreated.toLocaleDateString("en-UK")}
        </Text>
        <Title>status: {props.status}</Title>
        <Text>
        {props.upvoteCount}{props.upvoteCount===1 ? " upvote" : " upvotes"}
        </Text>
        <MoreDetailsLink
          marginTop={"10px"}
          marginLeft={"auto"}
          onClick={() => props.setToggleMoreDetails(true)}
        >
          more details
        </MoreDetailsLink>
      </MainContainer>
    </>
  );
};

export default PopupContent;
