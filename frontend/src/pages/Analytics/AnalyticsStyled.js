import styled from "styled-components";

const AnalyticsContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.greyColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    #printButton {
        width: 120px;
        height: 40px;
        border-radius:20px;
        border: none;
        background-color: ${(props) => props.theme.greenColor};
        color: white;
        :hover{
            cursor: pointer;
            -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
        }
    }
` 
export const Header = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border-bottom: solid 1px ${(props) => props.theme.darkGreyColor}; */
`

export const SubHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px ${(props) => props.theme.darkGreyColor};
    box-sizing: border-box;

    #divSubject{
        width: 70%; 
        height: 70%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelSubject{
            width: 100%;
            text-align: center;
            margin: 0px 5px;
        }
        #menuSubject{
            width: 100%;
            margin: 0px 5px;
            font-size: 16px;
            font-size: 4vw;
        }
        /* border-bottom: 3px solid ${(props) => props.theme.greenColor}; */
    }
    #divFields{
        width: 70%; 
        height: 70%; 
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelField{
            width: 100%;
            text-align: center;
            margin: 0px 5px;
        }
        #menuFields{
            width: 100%;
            margin: 0px 5px;
        }
        /* border-bottom: 3px solid ${(props) => props.theme.greenColor}; */
    }
    #divFilter{
        width: 70%; 
        height: 70%; 
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        #labelFilter{
            text-align: center;
            width: 100%;
            margin: 0px 5px;
        }
        #menuFilter {
            width: 100%;
            margin: 0px 5px;
        }
        #inputFilter{
            width: 100%;
            margin: 0px 5px;
            border: 1px solid ${(props) => props.theme.darkGreyColor};
            border-radius: 20px;
        }
        /* border-bottom: 3px solid ${(props) => props.theme.greenColor}; */
    }
    #divSorter{
        width: 70%; 
        height: 70%; 
        display: flex; 
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0px 10px;
        #labelSorter{
            text-align: center;
            width: 100%;
            margin: 0px 5px;
        }
        #menuSorter {
            width: 100%;
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
        /* border-bottom: 3px solid ${(props) => props.theme.greenColor}; */
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
    padding-top: 20px;
`
export const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  margin-top: 12px;
  color: ${(props) => props.theme.greenColor};
`;

export default AnalyticsContainer