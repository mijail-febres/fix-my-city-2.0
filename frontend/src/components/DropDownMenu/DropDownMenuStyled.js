import styled from "styled-components";

const DropDownMenuContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    #labelMenu {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${(props) => props.theme.greyColor};
        border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
        border-radius: 1em;
        #title {
            width: 95%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .DivOptions {
        /* width: 100%; */
        /* height: 100%; */
        min-width: 100%;
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items:flex-start;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.greyColor};
        border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
        z-index: 1;
        .menuItems {
            width: 100%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: center;
            padding: 0px 5px;
            margin: 1px;
            :hover {
                background-color: ${(props) => props.theme.greenColor};
            }
            .itemTag {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
            }
            :hover .itemTag{
                color: ${(props) => props.theme.greyColor};
                cursor: pointer;
                -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
            }
        }
    }
`

export default DropDownMenuContainer;