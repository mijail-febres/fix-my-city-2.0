import styled from "styled-components";
import { EmailPasswordField } from "../../globalstyles/Input";
import { ReportButton } from "../../globalstyles/ButtonStyles";

export const Main = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 3%;
  padding-right: 3%;
`;

export const NameContainer = styled.div`
  width: 90%;
  height: 150px;
  min-height: 150px;
  margin-top: 2%;
  color: black;
  display: flex;
  justify-content: start;
  margin-top: 0%;
  margin-bottom: 2%;

  #editButton {
    display: inline;
    background: none;
    border: none;
    #editIcon {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }

  .left {
    width: 35%;
    margin-top: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
      height: 100px;
      width: 100px;
      border: 1px solid black;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5%;
    #nameAndStatus{
      display: flex;
      flex-direction: column;
      
      h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          color: #e26236;
        
        }
    }  
  }

  p {
    margin-top: 5%;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  #uploadInput {
    display: none;
    /*display: flex;
        font-size: 16px;
        justify-content: center;
        width: 100px;
        border: 2px solid #F8CE46;
        background: none;
        padding: 7px 2px;   */
  }
  #uploadLabel {
    display: flex;
    height: 25px;
    font-size: 10px;
    justify-content: center;
    width: 100px;
    /*border: 2px solid #F8CE46;*/
    background: none;
    padding: 5px 1px;
    #uploadIcon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }
`;

export const StatusConatiner = styled.div`
  width: 90%;
  height: 12%;
  display: flex;

  img {
    width: 35%;
    height: 50%;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #e26236;
  }

  .blackP {
    color: black;
  }

  .left {
    width: 35%;
  }

  .middle {
    width: 33%;
    #iconAndLevel{
      display: flex;
      align-items: center;
      #statusIcon{
        position: relative;
        height: 100px;
      }
    }
  }

  .right {
    width: 32%;
   
  }
`;

export const IssueContainer = styled.div`
  width: 90%;
  height: 15%;
  display: flex;

  .left {
    width: 50%;

    h2 {
      color: #e26236;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      margin-top: 7%;
      margin-bottom: 6%;
    }
  }

  .right {
    width: 50%;
    h2 {
      color: black;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      margin-top: 7%;
      margin-bottom: 6%;
    }
  }
`;

export const ProfileDetailsSection = styled.div`
  height: 10%;
  width: 90%;

  h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin-top: 5%;

    color: #f8ce46;
  }
`;

export const UserDetails = styled.div`
  width: 90%;
  height: 40%;
  display: flex;

  .fieldAndEditButton {
    display: flex;
    align-items: center;

    #editButton {
      background: none;
      border: none;
      #editIcon {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
    margin-top: 7%;
    margin-bottom: 5%;
  }

  p {
    margin-bottom: 10%;
    font-size: 16px;
    font-weight: 300;
  }

  #password {
    font-size: 14px;
    border: none;
  }

  .left {
    width: 50%;
    //margin-top: 2%;
  }

  .right {
    width: 50%;
    //margin-top: 2%;
  }
`;

export const SaveBox = styled.div`
  width: 90%;
  height: 7%;
`;

export const EditProfileFieldContainer = styled.div`
  top: 0px;
  background-color: white;
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    h1 {
      font-size: 30px;
      color: black;
      font-weight: bold;
    }

    #fieldSection {
      border: none;
      outline: none;
      border-bottom: 2px solid grey;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      margin-top: 50px;
    }

    #saveButton {
      margin-top: 100px;
      font-weight: bold;
      font-size: 18px;
      padding: 10px 60px;
      background-color: white;
      border: 2px solid #e26236;
    }
  }
`;

export const FormContainer = styled.div`
  height: 87%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: black;
    font-weight: bold;
    margin-top: 30%;
    padding-left: 15%;
  }

  p {
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    padding-left: 15%;
    margin-top: 5%;
  }
`;

export const PContainer = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: 25%;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const UpdateButton = styled(ReportButton)`
  top: 380px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15%;

  :active {
    background: #e26236;
    color: white;
  }
`;

export const LastReportContainer = styled.div`
  border: solid green;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 90%;

  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #f8ce46;
    padding-bottom: 3%;
    border-bottom: solid black 2px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  width: 90%;

  button {
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: 14px;
    line-height: 15px;
    padding-top: 3%;
    text-align: right;
    color: #f8ce46;

    &:active {
      transform: translateY(4px);
    }
  }
`;

export const IconAndLevelContainer = styled.div`

  display: flex;
  justify-content: flex-start;

  #statusIcon{
    position: relative;
    height: 40px;
    top: 24px;
  }

`