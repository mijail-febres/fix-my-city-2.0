import styled from "styled-components";
import {LoginSignUpButton} from "../../globalstyles/ButtonStyles";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.greyColor};
`;

export const Header = styled.div`
    display:flex;
    height: 35%;
    left: 0px;
    top: 0px;
    width: 100%;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({image}) => `url(${image})`};
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    z-index: 0;
`

export const Logo = styled.img`
    position: absolute;
    left: 5%;
    top: 5%;
    z-index: 1;
    filter: invert(29%) sepia(10%) saturate(2444%) hue-rotate(124deg) brightness(94%) contrast(86%);
`;
    

export const FormWrapper = styled.form`
    display: flex;
    height: 50%;
    flex-direction: column;             
    align-items: center;
    justify-content: space-around;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizeM};
    color: ${(props) => props.theme.darkGreyColor};
`;

export const InputWrapper = styled.div`
    display: flex;
    margin-top:5%;
    flex-direction: column;
    justify-content: center;            
    align-items: center;
`;

export const EmailField = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.darkGreyColor};
    font-style: ${(props) => props.theme.greyColor};
    font-size: ${(props) => props.theme.fontSizeM};              
    width: 254px;
    height: 51px;
`;

export const PasswordField = styled.input`                
    width: 254px;
    height: 51px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.darkGreyColor}; 
    font-size: ${(props) => props.theme.fontSizeM};   
`;      

export const ButtonAndImage = styled.div`
`;

export const LoginButton = styled(LoginSignUpButton)`
    &:active {
        transform: translateY(4px);
        }    

`;

export const DontHaveAccount = styled.div`
    display:flex;
    height: 15%;
    flex-direction: column;
    align-items: center;
`;

export const Question = styled.div`
    color: ${(props) => props.theme.darkGreyColor};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizeM};
    margin-bottom: 5px;
`;

export const CreateAccount = styled.div`
    color: ${(props) => props.theme.greenColor};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizeM};
    cursor: pointer;
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
`;