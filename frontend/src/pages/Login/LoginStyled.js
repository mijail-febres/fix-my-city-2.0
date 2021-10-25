import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.yellowColor};

    #logoWrapper {
        height: 30%; 
        width: 100%;  
        margin-top: 20px;
        margin-left: 150px;  

    }  

    #titleWrapper {
        height: 10%;
        width: 100%;
        margin-left: 150px; 
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
        color: #000000;
    }
    
    #formWrapper {
        margin-top: 50px;
        height: 60%;
        display: flex;
        flex-direction: column;        
        justify-content: flex-start;        
        align-items: center;
      
        #inputWrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;            
            align-items: center;

            #emailField {
                background-color: transparent;
                border: none;
                border-bottom: 2px solid black;              
                width: 254px;
                height: 51px;
                margin-bottom: 20px;
            }
            #passwordField{                
                width: 254px;
                height: 51px;
                background-color: transparent;
                border: none;
                border-bottom: 2px solid black;  
                margin-bottom: 50px;   
            }
        }


        #buttonAndImage{
            #loginButton {
            width: 125px;
            height: 39px;
            border-radius: 4px;
            z-index: 1;        
            border: none;
            outline: none;
            color: black;
            background-color: white;
        
            &:active {
                transform: translateY(4px);
                }   
            }
            #house{
            width: 250px;
            height: auto;
            position: fixed;
            } 
        }
                
    } 
  
    
`;




