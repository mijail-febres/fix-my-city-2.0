import React, {useState} from 'react';
import { RegistrationForm, CongratsContainer } from './Styles';
import { SignUpField } from '../../globalstyles/Input';
import { LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {

    const [showRegistration,setShowRegistration] = useState(true);
    const [showCongrats,setShowCongrats] = useState(false);

    const signUpOnClickHandler = () => {
        setShowRegistration(false)
        setShowCongrats(true)

    }

    const history = useHistory();
    const loginOnClickHandler = (event) => {
        event.preventDefault();
        history.push("/login");
    }
           

    return (
        <>
            {
                showRegistration === true?
                    <RegistrationForm>
                        <h1>Sign Up</h1>

                        <p>Username</p>
                        <SignUpField/>

                        <p>Username</p>
                        <SignUpField/>

                        <p>First Name</p>
                        <SignUpField/>

                        <p>Last Name</p>
                        <SignUpField/>

                        <p>Email</p>
                        <SignUpField/>

                        <p>Password</p>
                        <SignUpField/>

                        <p>Password repeat</p>
                        <SignUpField/>

                        <LoginSignUpButton onClick={signUpOnClickHandler} type={"submit"}>Sign Up</LoginSignUpButton>

                    </RegistrationForm>
                :null}

            {
                showCongrats === true?
                    <CongratsContainer>

                        <h1>You’re all set, congrats!</h1>
                        <LoginSignUpButton onClick={loginOnClickHandler} type={"submit"}>Sign Up</LoginSignUpButton>

                    </CongratsContainer>
                :null}
        </>
    )
}
export default SignUpForm