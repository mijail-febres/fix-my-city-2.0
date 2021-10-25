import styled from "styled-components";
import React, { useEffect, useState } from "react";
import IssueComponent from "./issuesComponent";
import MoreDetails from "../Map/Popup/MoreDetails";
import { fetchIssues, fetchProfileInfo } from "../../Axios/fetches";
import Navigation from "../Navigation/Navigation";

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  width: 90%;

  margin-left: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
`;

const IssueList = (props) => {
  const [issues, setIssues] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [issuesLength, setIssuesLength] = useState(0);
  const [toggleMoreDetails, setToggleMoreDetails] = useState(false);
  const [toggleShowIssues, setToggleShowIssues] = useState(true);

  // Placeholder for MoreDetails
  const [fetchIssuesPlaceholder, setFetchIssuesPlaceholder] = useState(false);

  useEffect(() => {
    async function fetchUserId() {
      const profileInfo = await fetchProfileInfo();
      const userId = profileInfo.id;
      setCurrentUser(profileInfo);
      let data;
      if (props.profile) {
        data = await fetchIssues(userId);
      } else if (props.userIdReadOnly) {
        data = await fetchIssues(props.userIdReadOnly);
      } else {
        data = await fetchIssues();
      }
      if (props.profile) {
        setIssues(data.sort((a, b) => b.created - a.created));
      } else {
        setIssues(data.sort((a, b) => b.upvote_count - a.upvote_count));
      }
      setIssuesLength(data.length);
    }
    fetchUserId();
  }, []);

  const lastIndex = () => {
    const returnValue = props.displayIssues
      ? props.displayIssues
      : issuesLength;
    return returnValue;
  };

  return (
    <>
      {props.hideNavBar ? null : (
        <Navigation showBackButton={true} page={"issues"} />
      )}
      <Main>
        {toggleShowIssues && (
          <ListWrapper>
            {!props.profile && !props.userIdReadOnly && (
              <Title>Hottest issues</Title>
            )}
            {issues && issues.length !== 0 ? (
              issues
                .slice(0, lastIndex())
                .map((item, index) => (
                  <IssueComponent
                    key={`${index}-${item.title}`}
                    issue={item}
                    setSelectedIssue={setSelectedIssue}
                    setToggleMoreDetails={setToggleMoreDetails}
                    setToggleShowIssues={setToggleShowIssues}
                  />
                ))
            ) : (
              <h1>Loading...</h1>
            )}
          </ListWrapper>
        )}
      </Main>
      {toggleMoreDetails && (
        <MoreDetails
          setToggleMoreDetails={setToggleMoreDetails}
          setFetchIssues={setFetchIssuesPlaceholder}
          setToggleShowIssues={setToggleShowIssues}
          fetchIssues={fetchIssuesPlaceholder}
          issueId={selectedIssue.id}
          title={selectedIssue.title}
          author={selectedIssue.user.username}
          userId={selectedIssue.user.id}
          currentUser={currentUser}
          created={selectedIssue.created}
          upvoteCount={selectedIssue.upvote_count}
          upvotedBy={selectedIssue.upvoted_by}
          status={selectedIssue.status}
          category={selectedIssue.category}
          image={selectedIssue.image}
          description={selectedIssue.content}
          streetAndNumber={selectedIssue.adress}
          zip={selectedIssue.zip}
          city={selectedIssue.city}
        />
      )}
    </>
  );
};
export default IssueList;
