import styled from "styled-components";
import {LoginSignUpButton} from "../../globalstyles/ButtonStyles"

export const MenuContainer = styled.div`
    display:flex;
    position: fixed;
    justify-items: center;
    align-items: center;
    bottom: 0px;
    width: 100vw;
    height: 10vh;
    background: ${(props) => props.theme.greyColorGradient};
    z-index:10;
    cursor: pointer;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    /* border-top: 0.5px solid white; */
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    @media (min-width: 800px) {
        width: 30vw;
        left:35vw;
    }
`;

export const Home = styled.div`
    display:flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.darkGreyColor};
`;

export const Filter = styled(Home)`

`;

export const New = styled(Home)`
`;


export const Issues = styled(Home)`
`;

export const Profile = styled(Home)`

`;

export const Analytics = styled(Home)`

`;

export const Logo = styled.img`
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.darkGreyColor};
`;

export const Text = styled.p`
    display:flex;
    font-size: ${(props) => props.theme.fontSizeS};;
    align-items: center;
`;

export const IssueText = styled(Text)`
    color: ${(props) => props.theme.greenColor};  
    font-weight : bold ;
`

export const IssuesText = styled(Text)`
    color: ${(props) => props.theme.greenColor};  
    font-weight : bold ;
`

export const ProfileText = styled(Text)`
    color: ${(props) => props.theme.greenColor};  
    font-weight : bold ;
`

export const IssueTextGreen = styled(Text)`
    display:flex;
    color: ${(props) => props.theme.greenColor};
    font-weight : bold ;
    justify-self: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
`

export const PopUpContainer = styled.div`
    display: flex;
    
    max-height: 89vh;
    width: 100vw;

    @media (min-width: 800px) {
            width: 30vw;
            left:35vw;
        }

    //background-color: ${(props) => props.theme.greyColor}; 
    border-radius: 20px;

    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 11vh;
    z-index: 10;
    flex-direction: row;
`;

export const SubContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const SubContainer = styled.div`

`;

export const FilterContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

export const FilterButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Option1 = styled.button`
    margin-top: 5px;
    display:flex;
    cursor: pointer;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    background-color: ${(props) => props.theme.greyColor};
    border-radius: 20px;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    border:none;

    &:hover {
        cursor: pointer;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
        border: 2px solid ${(props) => props.theme.greenColor};
    }

    /* &:focus {
        background-color: ${(props) => props.theme.greenColor};
        color: white;
    } */

    /* &:checked {
        background-color: ${(props) => props.theme.greenColor};
        color: white;
    } */
`;

export const Option2 = styled(Option1)`

`;

export const Option3 = styled(Option1)`

`;

export const Option4 = styled(Option1)`

`;

export const Option5 = styled(Option1)`

`;

export const Option6 = styled(Option1)`

`;

export const Option7 = styled(Option1)`
    margin-bottom:5px;
`;

export const FilterButtonStyle = styled(LoginSignUpButton)`
    display:flex;
    justify-content: center;
    width: 90vh;
    margin-top: 5px;

    @media (min-width: 800px) {
            width: 25vw;
            //left: 37.5vw;
        }

    &:hover {
        cursor: pointer;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    }
`;
