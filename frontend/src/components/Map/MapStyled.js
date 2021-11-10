import styled, {keyframes} from "styled-components";
import { ReactComponent as svgMarkers } from "../../assets/svgs/svgMarker.svg"
import {defaultTheme} from '../../globalstyles/Styles.js';

const pulse = (color) => keyframes`
  0% {
    transform: scale(1.0);
    opacity: 1;
    transform-origin: center;
    /* stroke: ${color}; */
    stroke: ${defaultTheme.haloGreen};
  }
  100% {
    transform: scale(1.4);
    opacity: 0.6;
    transform-origin: center;
    stroke: ${color};
    stroke: ${defaultTheme.haloGreen};
  }
`
export const SvgAnimation = styled(svgMarkers)`
  height: 100%;
  width: 100%;
  .circle {
    animation: ${pulse('red')} infinite ${props => `${props.upvotecount}s`} linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
      /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);  */
    }
  }
  z-index: -1;
`

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
  background-color: ${(props) => props.theme.oldBlueColor};
  color: #ffffff;
  border-radius: 50%;
  font-size: 22px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.oldBlueColor};
`;

export const MarkerImgStyle = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-image: ${({image}) => `url(${image})`};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  :hover{
    cursor: pointer;
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
  }
`;
// export const MarkerImgStyle = styled.img`
//   width: 36px;
//   height: auto;
//   cursor: pointer;
// `;

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
  /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */

  position: absolute;
  right: 3%;
  top: 130px;
  z-index: 2;

  :hover {
    background-color: #f0f0f0;
  }
`;
