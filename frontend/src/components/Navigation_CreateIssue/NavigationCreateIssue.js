import React, { useState } from "react";
import { MainContainer } from "./NavigationCreateIssueStyled";
import leftArrow from "../../assets/images/left-arrow-navigation.png"
import { useHistory } from "react-router-dom";

const Navigation = (props) => {
  const history = useHistory();
  const [showMenu, toggleShowMenu] = useState(false);

  const menuIconOnClickHandler = () => {
    toggleShowMenu(!showMenu);
  };

  const backButtonOnClickHandler = () => {
    if (props.toggleShowStep1 === true) {
      history.push("/");
    }
    
    if (
      props.toggleShowStep2 === true &&
      !(props.toggleShowStep1 && props.toggleShowStep3 && props.toggleShowReview)
    ) {
      props.setToggleShowStep2(false);
      props.setToggleShowStep1(true);
    }
    if (
      props.toggleShowStep3 === true &&
      !(props.toggleShowStep1 && props.toggleShowStep2 && props.toggleShowReview)
    ) {
      props.setToggleShowStep3(false);
      props.setToggleShowStep2(true);
    }
    if (
      props.toggleShowReview === true &&
      !(props.toggleShowStep1 && props.toggleShowStep2 && props.toggleShowStep3)
    ) {
      props.setToggleShowReview(false);
      props.setToggleShowStep3(true);
    }
    if(props.toggleShowSomethingWentWrong===true){
      props.setShowToggleShowSomethingWentWrong(false);
      props.setToggleShowReview(true);
    }
  }

  return (
    <>
      <MainContainer>
        {props.showBackButton===true?
          <button id="back" onClick={backButtonOnClickHandler}>
            <img id="leftArrow" src={leftArrow} alt="left_arrow"></img>
          </button>           
          :null    
        }
        <div id="stepsContainer">
          <div className={props.toggleShowStep1===true?"stepSelected":"step"}>Location</div>
          <div className={props.toggleShowStep2===true?"stepSelected":"step"}>Picture</div>
          <div className={props.toggleShowStep3===true?"stepSelected":"step"}>Description</div>
          <div className={props.toggleShowReview===true?"stepSelected":"step"}>Review</div>
        </div>        
      </MainContainer>          
    </>
  );
};

export default Navigation;
