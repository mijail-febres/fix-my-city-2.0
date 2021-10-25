import React, {useState} from 'react';
import { TitleContainer, SignUpContainer, ThankYouContainer} from './Styles';
import LogoImg from '../../../src/assets/svgs/logo_title.svg';
import BottonImg from '../../../src/assets/svgs/logo_house.svg';
import { SignUpButton, LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { SignUpFields } from '../../globalstyles/Input';



const SignUp = () => {

    const [showTitle,setShowTitle] = useState(true);
    const [showSignUp,setShowSignUp] = useState(false);
    const [showThankYou,setShowThankYou] = useState(false);

    const signUpButtonOnClickHandler = () => {
        setShowTitle(false)
        setShowSignUp(true)
        
    }

    const signUPButtonOnClickHandler = () => {
        setShowSignUp(false)
        setShowThankYou(true)
    }

    return (
        <>
            {
                showTitle === true? 
            
                    <TitleContainer>
                        <div id='logo'>
                        <img src={LogoImg}/>
                        </div>

                        <div id='text'>Let's keep Zurich a great city to live in.</div>

                        <div id='buttonImgContainer'>
                        <SignUpButton onClick={signUpButtonOnClickHandler} type={"submit"}>Sign Up</SignUpButton>
                        <img src={BottonImg}/>
                        </div>
                    </TitleContainer>
                :null}

            {
                showSignUp === true ?
            
                    <SignUpContainer>
                        <h1>Sign Up</h1>
                        <p>Email</p>
                        <SignUpFields/>
                        <LoginSignUpButton onClick={signUPButtonOnClickHandler}>Sign Up</LoginSignUpButton>
                    </SignUpContainer>
                :null}

            {
                showThankYou === true ?
                    <ThankYouContainer>
                        <h1>Thank you!</h1>
                        <div id='thankyoutext'>We have sent a code and a link to the validation page to the email address you have provided.</div>
                    </ThankYouContainer>
                :null}
        </>
    )
}
export default SignUp