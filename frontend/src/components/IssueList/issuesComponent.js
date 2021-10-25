import styled from "styled-components";

const AddressContainer = styled.div`
  height: 96%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  padding-bottom: 3%;
  padding-top: 3%;

  .issue {
    padding-top: 2%;
    padding-bottom: 2%;
    color: #e26236;
  }
`;

const FetchingContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid black 2px;
  margin-bottom: 20px;

  .issue {
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const DateContainer = styled.div`
  font-size: 14px;
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 1.5%;
  margin-top: 1%;
  padding-bottom: 5%;
`;

export const UpvotesContainer = styled.div`
  height: 96%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 3%;

  p {
    font-size: 13px;
    font-weight: 300;
    color: #e26236;
  }
`;

const IssueComponent = (props) => {
  return (
    <>
      <FetchingContainer
        onClick={() => {
          props.setSelectedIssue(props.issue);
          props.setToggleMoreDetails(true);
          props.setToggleShowIssues(false);
        }}
      >
        <AddressContainer>
          <p className="issue">{props.issue.title}</p>
          {props.issue.adress}, {props.issue.zip} {props.issue.city}
        </AddressContainer>

        <UpvotesContainer>
          <DateContainer>{props.issue.modified.substr(0, 10)}</DateContainer>
          <p className="upvotes">Upvotes: {props.issue.upvote_count}</p>
        </UpvotesContainer>
      </FetchingContainer>
    </>
  );
};

export default IssueComponent;
