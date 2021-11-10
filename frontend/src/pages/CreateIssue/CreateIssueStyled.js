import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.greyColor};   
    color: black;
    
    
    #footer
    {
    display: flex;   
    color: ${(props) => props.theme.greyColor};
    height: 20%;
    justify-content: center;
    align-items: flex-start;
    background-color: none;
    //margin-top: 20px;
    //margin-bottom: 100px;  
   
    
    #backArrowButton{
        background: none;
        border: none;        
    }   
    
    #buttonsContainer{
        display: flex;
        margin-left: 50px;
        margin-right: 50px;
        justify-content: center;
        align-items: center;
    }    
}
`
export const PageTitle = styled.div`
    display: block;
    align-self:center;
    color: grey;
`;

export const NextButton = styled.div`
    display:flex;
    width: 200px;
    height: 39px;
    border-radius: 20px;   
    background-color: ${(props) => props.theme.greenColor};
    color: white;
    justify-content: space-between;
    padding: 0px 10px 0px 30px;
    align-items: center;
    border: none;
    font-weight: bold;
    cursor: pointer;
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
`;

export const Arrow = styled.img`
 display: flex;
 width: 30px;
 height: 30px;
`

export const SendButton = styled.div`
    display:flex;
    width: 200px;
    height: 39px;
    border-radius: 20px;   
    background-color: ${(props) => props.theme.greenColor};
    color: white;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
    cursor: pointer;
    /* -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); */
`;

export const HomeButton = styled(SendButton)`
`;

export const StepOneContainer = styled.div`
       
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 80%;
    #stepOneMain {
       
        flex-grow: 1;
    }
    p{
        font-size: 20px;
        margin-top: 20px;
        margin-left: 20px;
        align-self: center;
        color: grey;
    }

`
export const StepTwoContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    color: black;
    height: 80%;

   
    .pageTitle{
        display: : flex;
        align-self: center;
        color: grey;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 40px;
    }   
`
export const StepThreeContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 80%;
    margin-bottom: 30px;
   
    .pageTitle{
        display:flex;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 20px;
        align-self: center;
        color: grey;
    }   

    #titleCategoryDescriptionContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;  
        border: none;
        width: 80%;
        height: 70%;
        margin-top: 30px;

        

        #titleContainer{

            .fieldHeader{
                font-size: 16px;
                color: grey;
            }  
            
            margin-left: 20px;
            margin-bottom: 30px;
            //height: 10%;
            #title{
            font-size: 16px;
            width: 90%;
            height: 40px;           
            background-color: transparent;
            border: none;
            border-bottom: 1px solid ${(props) => props.theme.darkGreyColor};
            font-style: ${(props) => props.theme.greyColor};
            font-size: ${(props) => props.theme.fontSizeM}; 
            color: grey;          
            }
        }
       
        #categoryContainer{          

            margin-left: 20px;
            margin-bottom: 30px;
            //height: 10%;
            #selectCategory{                
                width: 90%;
                height: 40px;
                font-size: 16px;
                color: grey;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid ${(props) => props.theme.darkGreyColor};
                font-style: ${(props) => props.theme.greyColor};
                font-size: ${(props) => props.theme.fontSizeM};            
            }
            .fieldHeader{
                font-size: 16px;
                color: grey;
            }  
        }
        #descriptionContainer{           

            display: flex;
            flex-direction: column;
            margin-left: 20px;
            flex-grow: 1;
            #description{
                font-size: 16px;
                width: 90%;     
                min-height: 100px;
                flex-grow: 1; 
                border: none;
                padding-top: 10px;
                background-color: transparent;
                border-bottom: 1px solid ${(props) => props.theme.darkGreyColor};
                font-style: ${(props) => props.theme.greyColor};
                font-size: ${(props) => props.theme.fontSizeM}; 
                color: grey;
            }

            .fieldHeader{
                font-size: 16px;
                color: grey;
            }  
            
        }
       
    }
`

export const ReviewContainer = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 80%;    
    
    .pageTitle{
        font-size: 20px;
        margin-left: 20px;
        margin-top: 20px;
        align-self: center;
    }  
    
    .itemTitle{
        margin: 5px;
        margin-left: 10px;
        color: ${(props) => props.theme.greenColor};    
        font-size: 16px;   
    } 

    #powerTitle{
        font-size: 25px;
        font-weight: bold;
    }

    .itemText{
        margin: 0px;
        margin-bottom: 5px;
        word-wrap: break-word;
        margin-right: 10px;
        font-size: 16px;
        color: grey;
    }

    #reviewContainerBox{
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 80%;
        height: 80%;
        p{
            margin-left: 10px;
        }
        .reviewIconNameContainer{
            display: flex;
            align-items: center;
            margin-left: 10px;
        }

        .reviewIcons{
            width: 30px;
            height: auto;
        }
    }

`

export const Box = styled.div`
 
    width: 100px;
    height: 100px;
    margin: 10px;

    #selectedImage {            
       max-width: 100%; 
       height: auto;
       max-height: 100%;   
       object-fit: fill;
   
    }
`

export const ThankYouContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    height: 90%;
    background-color: ${(props) => props.theme.greyColor};
   
    #message{
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 20px;
        font-size: 20px;
        text-align: center;
    }
    #confirmationIcon{
        width: 100px;
        height: auto;
    }
`

export const SomethingWentWrongContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    height: 90%;

    #message{
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 20px;
        font-size: 20px;
        text-align: center;
    }

    #sad{
        width: 100px;
        height: auto;
    }
    h1{
        margin-left: 20px;
        margin-right: 20px;
        text-align: center;
    }
`




