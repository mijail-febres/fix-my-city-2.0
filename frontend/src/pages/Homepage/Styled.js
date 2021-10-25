import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background: #7cdbd5;
`;
export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const ReportButton = styled.button`
  width: 60%;
  height: 40px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.yellowColor};
  outline-style: none;
  border-radius: 4px;

  position: absolute;
  bottom: 6%;
  z-index: 2;
`;
export const Search = styled.div`
  width: 85%;
  height: 40px;
  border-radius: 25px;
  background-color: white;
  text-align: center;
  border-bottom: 1px solid rgb(206, 206, 206);
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    outline: none;
    background-color: white;
    border: none;
  }

  img {
    width: 30px;
    height: 30px;
  }

  button {
    background: none;
    outline: none;
    background-color: white;
    border: none;
    margin-left: 30px;
    cursor: pointer;
  }
`;

export const CatBox = styled.div`
  position: absolute;
  width: 75%;
  height: 38%;
  border-radius: 25px;
  margin-top: 47%;
  background-color: #4abdac;
  color: white;
  font-size: medium;

  input {
    width: 90%;
    height: 40px;
    border-radius: 25px;
    background-color: white;
    text-align: center;
    border-bottom: 1px solid rgb(206, 206, 206);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
  }

  select {
    width: 90%;
    height: 40px;
    border-radius: 25px;
    background-color: white;
    text-align: center;
    border-bottom: 1px solid rgb(206, 206, 206);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
  }

  p {
    margin-left: 6%;
  }
`;
