import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: #EBEBEB;
  position: absolute;
  z-index: 5;
  top: 0;
  border: 1px solid white;
  padding-bottom:10vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  @media (min-width: 800px) {
    width: 50vw;
    left: 25vw;
    }
 
`;

export const SubContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "35px"};

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};
`;

export const Title = styled.h1`
  display:flex;
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: bold;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  color: ${(props) => props.theme.greenColor};
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "14px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

export const CategoryField = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    font-size: ${(props) => props.fontSize || "14px"};
    margin-top: ${(props) => props.marginTop || "0px"};
    margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

export const IssueImg = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const UpvoteButton = styled.button`
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
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
`;