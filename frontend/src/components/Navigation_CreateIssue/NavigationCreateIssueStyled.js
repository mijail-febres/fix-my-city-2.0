import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 15%;
  position: relative;
  width: 100%;

  #back{
    background: none;
    border: none;

    #leftArrow {
    width: 30px;
    height: auto;
    margin-left: 10px;
    }
  }

  #stepsContainer{
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;

    .step{
      background-color: #EBEAE9;
      font-size: 18px;
      color: #939393;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .stepSelected{
      background-color: #F8CE46;
      color: black;
      font-weight: bold;
      font-size: 18px;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
