import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import {MainContainer, Box, InputBox} from "./CameraStyled"
import { IconButton } from '@material-ui/core';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import CameraIcon from "../../assets/images/photo-camera-black-tool-light.png"

// if material-ui icon: <PhotoCameraRoundedIcon fontSize="large" color="primary" />
//Camera app
const Camera = (props) => {    

   
    const handleCapture = (target) => {
        if (target.files) {
          if (target.files.length !== 0) {
            const file = target.files[0];
            props.setImageFile(file);
            const newUrl = URL.createObjectURL(file);
            props.setImageURL(newUrl);            
          }
        }
      };

    return(
        <MainContainer>          
            {props.imageURL &&
              <Box>
                <img src={props.imageURL} alt={"snap"} className="img"></img>
              </Box>}
              <InputBox
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  /*capture="environment"*/
                  onChange={(e) => handleCapture(e.target)}>
              </InputBox>
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                <img id={props.imageURL===""?"cameraIcon":"cameraIconSmall"} src={CameraIcon}></img>
                </IconButton>
              </label>
        </MainContainer> 
    )
}


export default Camera