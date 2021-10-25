import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 160px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 15px;

  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: center;
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
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
  color: #f8ce46;

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
        <Text fontWeight={"bold"}>{props.status}</Text>
        <Text>{props.upvoteCount} upvotes</Text>
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
