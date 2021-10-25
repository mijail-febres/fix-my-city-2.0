import styled from 'styled-components';
import { SignUpField } from "../../globalstyles/Input";
import { ReportButton } from "../../globalstyles/ButtonStyles";


export const TitleContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.yellowColor};

    #logo {
        height: 34% ;

        img {
            height: 99%;
            padding-top: 20%;
        }
    }

    #text {
        position: absolute;
        width: 220px;
        height: 52px;
        left: 64px;
        top: 268px;
        font-weight: bold;
        font-size: 29px;
        line-height: 34px;

        
    }

    #buttonImgContainer {
        height: 64%;

        img {
        height: 37%;
        position: fixed;
        top: 67%;
        left: 47%;
        }

        button {
            z-index: 1;
            border: none;
            outline: none;

            &:active {
            transform: translateY(4px);
        }
        }
    }
`

export const SignUpContainer =styled.div`
    height: 100%;
    width: 100%;
    

    h1 {
        position: absolute;
        width: 220px;
        height: 52px;
        left: 64px;
        top: 165px;
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
    }

    p {
        position: absolute;
        width: 124.38px;
        height: 19.81px;
        left: 64px;
        top: 283px;
        color: ${props => props.theme.blueColor};
    }

    button {
        border: none;
        outline: none;

        &:active {
            transform: translateY(4px);
        }
    }
    

    input {
        border: solid ${props => props.theme.blueColor};
        outline: ${props => props.theme.blueColor};
        border-radius: 4px;
    }
`

export const ThankYouContainer =styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.yellowColor};

    h1 {
        position: absolute;
        width: 220px;
        height: 52px;
        left: 64px;
        top: 165px;
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
    }

    #thankyoutext {
        position: absolute;
        width: 217px;
        height: 95px;
        left: 67px;
        top: 254px;
    }
`

export const RegistrationForm =styled.form`
    height: 100%;
    width: 100%;
    padding-top: 20%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h1 {
        width: 100%;
        padding-left: 32%;
        height: 52px;
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
    }

    p {
        width: 100%;
        margin-right: 35%;
        margin-top: 2%;
        width: 124.38px;
        height: 19.81px;
    }

    button {
        margin-top: 15%;
        margin-bottom: 25%;
        border: none;
        outline: none;

        &:active {
            transform: translateY(4px);
        }
    }
`



export const CongratsContainer =styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.yellowColor};

    h1 {
        position: absolute;
        width: 220px;
        height: 52px;
        left: 64px;
        top: 128px;
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
    }

    button {
        margin-top: 15%;
        margin-bottom: 25%;
        border: none;
        outline: none;
        background-color: white;
        color: black;

        &:active {
            transform: translateY(4px);
        }
    }
`