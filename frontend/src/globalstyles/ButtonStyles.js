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
//smaller Login & Sign Up Button
export const LoginSignUpButton = styled.button`
    position: absolute;
    width: 125px;
    height: 39px;
    border-radius: 4px;
    left: 117px;
    top: 523px;
    background: #5D61F6;    
    color: white;
    display: grid;
    justify-items: center;
    align-items: center;
`
//(Add filters to your search) (Apply filters) (Clear all) BUTTONS just the width must be changed!
export const FilterButton = styled.button`
    position: absolute;
    width: 181px;
    height: 33px;
    left: 90px;
    top: 584px;
`

