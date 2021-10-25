import styled from "styled-components";

export const MainContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: ${(props) => props.position || "relative"};
  z-index: 4;
  top: ${(props) => props.top || "0px"};
  width: 100%;

  #leftArrow {
    width: 30px;
    height: auto;
    margin-left: 10px;
    cursor: pointer;
  }

  #back {
    background: none;
    border: none;
  }

  #menu {
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    margin-left: auto;
  }

  #menu_img {
    width: 40px;
    height: auto;
  }
`;

export const MenuStyled = styled.div`
  width: 100px;
  height: 120px;
  position: absolute;
  z-index: 4;
  top: 60px;
  right: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .menuOption {
    background: none;
    border: none;
    border-bottom: 1px solid black;
    height: 40px;
    color: black;
  }
  .menuOption:hover {
    background-color: lightgray;
  }
`;
