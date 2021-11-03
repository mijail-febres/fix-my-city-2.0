import styled from 'styled-components';


export const TitleContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.greyColor};

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
`;

export const SignUpContainer =styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.greyColor};
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    

    h1 {
        font-weight: bold;
        font-size: 25px;
        line-height: 41px;
        color: ${props => props.theme.darkGreyColor};
    }

    p {
        position: absolute;
        width: 124.38px;
        height: 19.81px;
        left: 64px;
        top: 283px;
        color: ${props => props.theme.oldBlueColor};
    }
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


export const SignUpWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.greyColor};
`;

export const RegistrationForm =styled.form`
    height: 65%;
    width: 90vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    

    h1 {
        padding-top:10px;
        font-weight: bold;
        font-size: 25px;
        line-height: 41px;
        color: ${props => props.theme.greenColor};
    }

    p {
        width: 100%;
        margin-right: 35%;
        margin-top: 1%;
        margin-bottom:1%;
        width: 124.38px;
        height: 19.81px;
    }

    button {

        &:active {
            transform: translateY(4px);
        }
    }
`;

export const CongratsContainer =styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.grey};
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
        line-height: 41px;
        font-weight: bold;
        font-size: 25px;
        color: ${props => props.theme.greenColor};
    }

    h2 {
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        color: ${props => props.theme.darkGreyColor};
    }
`;

export const ImageWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

export const Text = styled.div`
    padding: 10px;
    font-weight: bold;
    color: ${props => props.theme.darkGreenColor};
`;