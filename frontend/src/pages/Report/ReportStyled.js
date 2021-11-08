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
    height: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px ${(props) => props.theme.darkGreyColor};
`

export const SubHeader = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.darkGreyColor};
    box-sizing: border-box;

    #divSubject{
        width: 20%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelSubject{
            width: 30%;
            text-align: center;
            margin: 0px 5px;
        }
        #menuSubject{
            width: 70%;
            margin: 0px 5px;
        }
        border-bottom: 3px solid ${(props) => props.theme.greenColor};
    }
    #divFields{
        width: 20%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelField{
            width: 30%;
            text-align: center;
            margin: 0px 5px;
        }
        #menuFields{
            width: 70%;
            margin: 0px 5px;
        }
        border-bottom: 3px solid ${(props) => props.theme.greenColor};
    }
    #divFilter{
        width: 20%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelFilter{
            width: 30%;
            margin: 0px 5px;
        }
        #menuFilter {
            width: 40%;
            margin: 0px 5px;
        }
        #inputFilter{
            width: 30%;
            margin: 0px 5px;
        }
        border-bottom: 3px solid ${(props) => props.theme.greenColor};
    }
    #divSorter{
        width: 20%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelSorter{
            width: 20%;
            margin: 0px 5px;
        }
        #menuSorter {
            margin: 0px 5px;
        }
        #buttonSorter{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 5px;
            #iconSorter{
                height: 100%;
                width: 100%;
            }
        }
        border-bottom: 3px solid ${(props) => props.theme.greenColor};
    }
    #printTrigger {
        height: 70%; 
        display: flex; 
        justify-content: center;
        align-items: center;
    }
`

export const Body = styled.div`
    width: 90%;
    height: 100%;
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