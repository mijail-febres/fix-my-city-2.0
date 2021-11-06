import styled from "styled-components";

const ReportContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.greyColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #printButton {
        width: 120px;
        height: 40px;
        border-radius:20px;
        border: none;
        background-color: ${(props) => props.theme.greenColor};
        color: white;
        :hover{
            cursor: pointer;
        }
    }
` 
export const Header = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px ${(props) => props.theme.darkGreyColor};
`

export const SubHeader = styled.div`
    width: 90%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.darkGreyColor};
    #divSubject{
        width: 30%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
        /* .SubjectOption {
            appearance:none;
            -moz-appearance:none;
            -webkit-appearance:none;
            color: green;
            background: ${(props) => props.theme.greyColor};
            border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
        } */
        #subject{
            background-color: ${(props) => props.theme.greyColor};
            border: ${(props) => `solid 1px ${props.theme.darkGreyColor}`};
            .SubjectOption {
                background-color: green!important;
                font-weight: bold!important;
                color: red!important;
            }
        }
    }
    #divFields{
        width: 30%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
    }
`

export const Body = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  margin-top: 12px;
  color: ${(props) => props.theme.greenColor};
`;

export default ReportContainer