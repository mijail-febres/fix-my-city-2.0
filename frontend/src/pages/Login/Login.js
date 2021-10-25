import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";
import { EmailPasswordField } from "../../globalstyles/Input";
import { LoginSignUpButton } from "../../globalstyles/ButtonStyles";
import fixmycitylogo from "../../assets/svgs/fixmycitylogonew.svg";
import house from '../../../src/assets/svgs/logo_house.svg';
import {MainContainer} from "./LoginStyled"


const Login = () => {
  const token = useSelector((state) => state.tokenReducer.token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const url = "auth/token/";
    const body = {
      email: email,
      password: password,
    };

    try {
      const resp = await Axios.post(url, body);
      if (resp.status === 200) {
        setEmail("");
        setPassword("");

        dispatch({
          type: "getToken",
          payload: resp.data.access,
        });

        localStorage.setItem("token", resp.data.access);
        history.push("/");
      }
    } catch (err) {
      if (err.response.status > 400) {
        console.log(err.response);
      }
    }
  };

  return (
    <MainContainer>
      <div id="logoWrapper">
        <img src={fixmycitylogo} alt="logo" />
      </div>
      <div id="titleWrapper">
        Welcome <br />
        back.
      </div>
      <form id="formWrapper" onSubmit={onHandleSubmit}>
        <div id="inputWrapper">
          <input id="emailField"
            placeholder="Email"
            type="email"
            required="This field is required"
            onChange={onUsernameChange}
          />
          <input id="passwordField"
            placeholder="Password"
            type="password"
            required="This field is required"
            onChange={onPasswordChange}
          />
        </div>
        <div id="buttonAndImage">
          <button id="loginButton" type={"submit"}>Login</button>         
        </div>        
      </form>  
    </MainContainer>
  );
};

export default Login;
//<img id="house" src={house} alt="house_icon"></img>