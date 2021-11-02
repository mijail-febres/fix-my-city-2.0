import styled from "styled-components";


export const AddressContainer = styled.div`
  height: 96%;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  font-weight: 300;
  padding-bottom: 1%;
  padding-top: 3%;

  .issue {
    padding-top: 2%;
    padding-bottom: 2%;
    color: ${(props) => props.theme.darkColor};
  }
`;

export const Address = styled.div`
  font-size: 12px;
`

export const FetchingContainer = styled.div`
  //height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) => props.theme.darkGreyColor} 1px solid;
  //margin-bottom: 5px;

  .issue {
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const DateContainer = styled.div`
  display:flex;
  font-size: 14px;
  font-weight: 300;
  font-weight: bold;
  padding-top: 3%;
  padding-bottom: 5%;
`;

export const UpvotesContainer = styled.div`
  display:flex;
  height: 96%;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1%;

  p {
    font-size: 13px;
    font-weight: bold;
    color: ${(props) => props.theme.greenColor};
  }
`;

export const IssueandAddress = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const InsectIcon = styled.img`
    display:flex;
    //align-self: center;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 10px;
`;

export const LitterIcon = styled(InsectIcon)`
`;

export const PlantIcon = styled(InsectIcon)`
`;

export const GraffitiIcon = styled(InsectIcon)`
`;

export const StreetSignIcon = styled(InsectIcon)`
`;

export const DamageIcon = styled(InsectIcon)`
`;

export const BrokenIcon = styled(InsectIcon)`
`;