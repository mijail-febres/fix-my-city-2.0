import styled from "styled-components";
import {LoginSignUpButton} from "../../globalstyles/ButtonStyles";
import map from "../../assets/images/map-login-bw-small.png";


export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.theme.greyColor};

`;

export const Header = styled.div`
    display:flex;
    height: 50%;
    width: 100%;
    left: 0px;
    top: 0px;
    margin:0;
    padding: 0;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
    /* background-image: linear-gradient( rgba(36, 91, 85, 0.7), rgba(245, 245, 245, 0.7)), url(${map}); */
    background-image: linear-gradient( rgba(245, 245, 245, 0.7), rgba(36, 91, 85, 0.7) ), url(${map});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    #logo-wrapper{
        display: flex;
        justify-content: center;
        align-items: center; 
        height: 150px; 
        width:  150px; 
        border-radius: 50%; 
        background-color: ${(props) => props.theme.greyColor};
        margin: 0px 0px 40px 0px;
    }
    .custom-shape-divider-bottom-1636578359 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1636578359 svg {
        position: relative;
        display: block;
        width: calc(141% + 1.3px);
        height: 56px;
    }

    .custom-shape-divider-bottom-1636578359 .shape-fill {
        fill: ${(props) => props.theme.greyColor};
    }

    /** For mobile devices **/
    @media (max-width: 767px) {
        .custom-shape-divider-bottom-1636578359 svg {
            width: calc(141% + 1.3px);
            height: 74px;
        }
    }
`;

export const LogoWrapper = styled.div`
    width: 10px;
    height: 10px;
    background-image: ${({image}) => `url(${image})`};
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
`

export const Logo = styled.img`
    width: 70%;
    height: 70%;
    /* position: absolute; */
    /* left: 5%;
    top: 5%; */
    /* z-index: 1; */
    filter: invert(29%) sepia(10%) saturate(2444%) hue-rotate(124deg) brightness(94%) contrast(86%);
`;
    

export const FormWrapper = styled.form`
    display: flex;
    height: 40%;
    flex-direction: column;             
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme.greyColor};

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
    height: 10%;
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
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`;