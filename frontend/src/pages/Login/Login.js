import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";
import fixmycitylogo from "../../assets/svgs/fixmycitylogonew.svg";
// import fixmycitylogo from "../../assets/images/FMC_green.png";
import map from "../../../src/assets/images/map-login-large.png";
import {
  Header,
  MainContainer, 
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
    history.push(`/signup`)
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
          <div id='logo-wrapper'>
            <Logo src={fixmycitylogo} alt="logo" />
          </div>
          <div class="custom-shape-divider-bottom-1636578359">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>   
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