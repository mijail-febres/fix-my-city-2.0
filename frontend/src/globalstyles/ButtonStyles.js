import styled from "styled-components";

//used for Next, 
export const NextButton = styled.button`
    position: absolute;
    width: 196px;
    height: 51px;
    left: 82px;
    top: 555px;
    background: #FFFFFF;
    border: 3.5px solid #5D61F6;
    box-sizing: border-box;
    border-radius: 4px;
`

//Report, Save, Verify
export const ReportButton = styled(NextButton)`
    border: 3.5px solid #E26236;
`

//Sign Up, Up-vote issue,
export const SignUpButton = styled.button`
    position: absolute;
    width: 196px;
    height: 51px;
    border-radius: 4px;
    left: 88px;
    top: 480px;
`
//smaller Login & Sign Up Button - Pearl rewrote this one
export const LoginSignUpButton = styled.button`
    width: 200px;
    height: 39px;
    border-radius: 20px;   
    background-color: ${(props) => props.theme.greenColor};
    color: white;
    justify-items: center;
    align-items: center;
    border: none;
    cursor: pointer;
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
`