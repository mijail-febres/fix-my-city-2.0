import styled from "styled-components";

export const MainContainer = styled.div`
  height: ${(props) => props.height || "50%"};
  width: ${(props) => props.width || "50%"};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MarkerDivStyle = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  line-height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.theme.blueColor};
  color: #ffffff;
  border-radius: 50%;
  font-size: 22px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.blueColor};
`;

export const MarkerImgStyle = styled.img`
  width: 36px;
  height: auto;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ChooseButton = styled.button`
  height: 100%;
  width: 50%;
  border: 3px solid black;

  background-color: ${(props) => props.backgroundColor || "white"};
`;

export const SatelliteButton = styled.button`
  height: 29px;
  width: 29px;
  outline: none;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  cursor: pointer;

  position: absolute;
  right: 3%;
  top: 130px;
  z-index: 2;

  :hover {
    background-color: #f0f0f0;
  }
`;
