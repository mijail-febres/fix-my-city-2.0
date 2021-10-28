import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";
import fixmycitylogo from "../../assets/svgs/fixmycitylogonew.svg";
import map from "../../../src/assets/images/map-login-large.png";
import {
  Header,
  MainContainer, 
  LogoWrapper,
  Logo,
  TitleWrapper,
  FormWrapper,
  InputWrapper,
  EmailField,
  PasswordField,
  ButtonAndImage,
  LoginButton,
  DontHaveAccount,
  Question,
  CreateAccount
} from "./LoginStyled"


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

  const onCreateAccountClick = (event) => {
    event.preventDefault();
    //add link to account creation page
  }

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
        <Header>
            <LogoWrapper src={map} alt="map Zurich"></LogoWrapper>
            <Logo src={fixmycitylogo} alt="logo" />
        </Header>
        <FormWrapper onSubmit={onHandleSubmit}>
            <TitleWrapper>
              Log in to continue
            </TitleWrapper>
            <InputWrapper>
              <EmailField
                placeholder="Email"
                type="email"
                required="This field is required"
                onChange={onUsernameChange}
              />
              <PasswordField
                placeholder="Password"
                type="password"
                required="This field is required"
                onChange={onPasswordChange}
              />
            </InputWrapper>
            <ButtonAndImage>
              <LoginButton type={"submit"}>Login</LoginButton>         
            </ButtonAndImage>        
        </FormWrapper>  
        <DontHaveAccount>
            <Question>Don't have an account yet?</Question>
            <CreateAccount onClick={onCreateAccountClick}>Create account</CreateAccount>
        </DontHaveAccount>
    </MainContainer>
  );
};

export default Login;
//<img id="house" src={house} alt="house_icon"></img>