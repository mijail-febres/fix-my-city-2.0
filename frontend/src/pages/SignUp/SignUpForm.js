import React, {useState} from 'react';
import { RegistrationForm, CongratsContainer } from './Styles';
import { SignUpField } from '../../globalstyles/Input';
import { LoginSignUpButton } from '../../globalstyles/ButtonStyles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
                        <SignUpField type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>

                        <p>First Name</p>
                        <SignUpField type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>

                        <p>Last Name</p>
                        <SignUpField type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>

                        <p>Email</p>
                        <SignUpField type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>

                        <p>Code</p>
                        <SignUpField type="text" placeholder="Validation code" onChange={(e) => setCode(e.target.value)}/>

                        <p>Password</p>
                        <SignUpField type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                        <p>Password repeat</p>
                        <SignUpField type="password" placeholder="Password repeat" onChange={(e) => setPassword2(e.target.value)}/>

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