import styled from "styled-components";

const DropDownMenuContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    #labelMenu {
        background-color: ${(props) => props.theme.greyColor};
        border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
        border-radius: 3px;
    }
    .DivOptions {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items:flex-start;
        background-color: ${(props) => props.theme.greyColor};
        border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
        z-index: 1;
    }
    .up-arrow:after {
        display: inline-block;
        content: " ";
        margin-left: 4px;
        margin-bottom: 4px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
    }
    
    .down-arrow:after {
        display: inline-block;
        content: " ";
        margin-left: 4px;
        margin-bottom: 4px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid black;
    }
`

export default DropDownMenuContainer;