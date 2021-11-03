import React, {useState} from 'react';
import { 
    SignUpContainer, 
    ThankYouContainer,
    EmailField,
    Text,
} from './Styles';
import LogoImg from '../../../src/assets/svgs/logo_title.svg';
import BottonImg from '../../../src/assets/svgs/logo_house.svg';
import { LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const SignUp = () => {

    const [showSignUp,setShowSignUp] = useState(true);
    const [showThankYou,setShowThankYou] = useState(false);
    const [email, setEmail] = useState("");
    const history = useHistory();

    const signUpHandler = async () => {
        await axios.post(
            `https://fix-my-city.app.propulsion-learn.ch/backend/api/registration/`,
            {email: email}
        )
        setShowSignUp(false)
        setShowThankYou(true)
    }

    const thankYouHandler = (event) => {
        event.preventDefault();
        history.push('/signupform')
    }

    return (
        <>
            {
                showSignUp === true ?
            
                    <SignUpContainer>
                        <Text>We will send a validation code<br/> to your email address</Text>
                        <EmailField type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <LoginSignUpButton onClick={signUpHandler}>Send code</LoginSignUpButton>
                    </SignUpContainer>
                :null}

            {
                showThankYou === true ?
                    <SignUpContainer>
                        <Text>Thank you!</Text>
                        <div>We sent a code and a link to the validation page to the email address you provided.</div>
                        <LoginSignUpButton onClick={thankYouHandler}>Sign up with the code!</LoginSignUpButton>
                    </SignUpContainer>
                :null}
        </>
    )
}
export default SignUp