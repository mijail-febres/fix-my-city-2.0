import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 15%;
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.greyColor};

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
      background-color: ${(props) => props.theme.darkGreyColor};
      width: 15vw;
      height: 2px;
      border-radius: 20px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .stepSelected{
      background-color: ${(props) => props.theme.greenColor};
      font-weight: bold;
      border-radius: 20px;
      width: 15vw;
      height: 2px;
      padding:5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
