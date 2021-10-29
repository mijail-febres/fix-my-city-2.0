import styled from "styled-components";

export const MenuContainer = styled.div`
    display:flex;
    position: fixed;
    justify-items: center;
    align-items: center;
    bottom: 0px;
    width: 100vw;
    height: 10vh;
    border-radius: 20px;
    background-color: ${(props) => props.theme.greyColor};
    z-index:10;

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

export const Logo = styled.img`
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.darkGreyColor};
`;

export const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizeS};;
`;

export const IssueText = styled(Text)`
    color: ${(props) => props.theme.greenColor};  
    font-weight : bold ;
`