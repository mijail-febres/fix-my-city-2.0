import React, {useState} from 'react';
import { SignUpContainer, ThankYouContainer} from './Styles';
import LogoImg from '../../../src/assets/svgs/logo_title.svg';
import BottonImg from '../../../src/assets/svgs/logo_house.svg';
import { LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { SignUpFields } from '../../globalstyles/Input';
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
                        <h1>Sign Up</h1>
                        <p>Email</p>
                        <SignUpFields type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <LoginSignUpButton onClick={signUpHandler}>Sign Up</LoginSignUpButton>
                    </SignUpContainer>
                :null}

            {
                showThankYou === true ?
                    <ThankYouContainer>
                        <h1>Thank you!</h1>
                        <div id='thankyoutext'>We have sent a code and a link to the validation page to the email address you have provided.</div>
                        <LoginSignUpButton onClick={thankYouHandler}>To Vaidation</LoginSignUpButton>
                    </ThankYouContainer>
                :null}
        </>
    )
}
export default SignUp