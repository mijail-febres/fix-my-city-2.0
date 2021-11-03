import React, {useState} from 'react';
import { 
    RegistrationForm, 
    CongratsContainer,
    SignUpWrapper,
    ImageWrapper, 
} from './Styles';
import { LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
    Header,
    Logo,
    LogoWrapper,
    EmailField
} from "../../pages/Login/LoginStyled";
import map from "../../assets/images/map-login-large.png";
import fixmycitylogo from "../../assets/svgs/fixmycitylogonew.svg";
import scout from "../../assets/images/scout.png"
import knight from "../../assets/images/knight.png"
import hero from "../../assets/images/hero.png"
import {GameIcon} from "../../pages/Profile/ProfileStyled"

const SignUpForm = () => {

    const [showRegistration,setShowRegistration] = useState(true);
    const [showCongrats,setShowCongrats] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const history = useHistory();

    const signUpOnClickHandler = async () => {

        if (password !== password2){
            alert("your passwords do not match");
            setShowCongrats(false);
            setShowRegistration(true);
        }
        else {
        setShowRegistration(false)
        setShowCongrats(true)
        await axios.post(
            `https://fix-my-city.app.propulsion-learn.ch/backend/api/registration/validate/`,
            {
                email,
                code,
                username,
                firstName,
                lastName,
                password,
                password_repeat: password2,
            }
        )
        }
    }

    const loginOnClickHandler = (event) => {
        event.preventDefault();
        history.push("/login");
    }
           

    return (
        <>
            {
                showRegistration === true?
                <SignUpWrapper>
                    <Header>
                        <LogoWrapper src={map} alt="map Zurich"></LogoWrapper>
                        <Logo src={fixmycitylogo} alt="logo" />
                    </Header>
                    <RegistrationForm>
                        <h1>Sign Up to Fix My City!</h1>

                        <EmailField type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>

                        <EmailField type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>

                        <EmailField type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>

                        <EmailField type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>

                        <EmailField type="text" placeholder="Validation code" onChange={(e) => setCode(e.target.value)}/>

                        <EmailField type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                        <EmailField type="password" placeholder="Password repeat" onChange={(e) => setPassword2(e.target.value)}/>
                        <br/>
                        <LoginSignUpButton onClick={signUpOnClickHandler} type={"submit"}>Sign Up</LoginSignUpButton>

                    </RegistrationForm>
                </SignUpWrapper>
                :null}

            {
                showCongrats === true?
                    <CongratsContainer>

                        <h1>You’re all set, congrats!</h1>
                        <h2>You can now start gathering points while fixing this city:
                            <br/>
                            <br/>
                            move up from scout to knight to hero and get rewarded for your good work!
                        </h2>

                        <ImageWrapper>
                            <GameIcon src={scout} alt ="scout"/>
                            <GameIcon src={hero} alt ="hero"/>
                            <GameIcon src={knight} alt ="knight"/>
                        </ImageWrapper>
            
                        <LoginSignUpButton onClick={loginOnClickHandler} type={"submit"}>Go to Login</LoginSignUpButton>

                    </CongratsContainer>
                :null}
        </>
    )
}
export default SignUpForm