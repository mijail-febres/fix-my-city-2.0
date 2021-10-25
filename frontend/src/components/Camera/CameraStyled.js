import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    text-align: center;
    flex-grow: 1;

    #cameraIcon{
        width: 200px;
        height: auto;
    }

    #cameraIconSmall{
        width: 50px;
        height: auto;
    }
    
`

export const Box = styled.div`
    /*display: flex;
    justify-content: center;*/
    width: 200px;
    height: 300px;
    
    /*max-width: 80%;
    max-height: 80%;*/
    margin: 10px;

    .img {            
       max-width: 100%; 
       height: auto;
       max-height: 100%;   
       object-fit: fill;
   
    }
`
export const InputBox = styled.input`
    display: none;
`