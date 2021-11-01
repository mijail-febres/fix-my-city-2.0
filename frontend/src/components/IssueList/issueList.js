import React, { useEffect, useState } from "react";
import IssueComponent from "./issuesComponent";
import MoreDetails from "../Map/Popup/MoreDetails";
import { fetchIssues, fetchProfileInfo } from "../../Axios/fetches";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user.png";
import newIssue from "../../assets/images/new.png";
import listGreen from "../../assets/images/list-LG.png";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    MenuContainer,
    Home,
    Filter,
    
    New,
    Issues,
    Profile,
    Logo,
    IssuesText,
    Text,
    PopUpContainer,
    SubContainer,
    SubContainerButtons,
    FilterContainer,
    FilterButtonStyle,
    Option1,
    Option2,
    Option3,
    Option4,
    Option5,
    Option6,
    Option7,
    FilterButtons,
  } from "../../components/MenuFooter/MenuFooterStyled"

import {
  ListWrapper,
  Main,
  Title
} from "../IssueList/issueListStyled";

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

  const dispatch = useDispatch();

    const filterValueRedux = useSelector((state) => state.filterReducer.filter);

    const [toggleFilter, setToggleFilter] = useState(false);

    const [filterValue, setFilterValue] = useState(
        filterValueRedux === "default" ? "default" : filterValueRedux
    );

    const ApplyClickEvent = () => {
        handleFilter();
        setToggleFilter(false);
    }

    const handleFilter = () => {
        dispatch({
        type: "applyFilter",
        payload: filterValue,
        });
    };


    const history = useHistory();
  
    const handleHomeClick = () => {
        history.push("/");
    };

    const handleNewIssueClick = () => {
      history.push("/");
    };

    const handleListClick = () => {
        history.push("/issues");
    };

    const handleUserClick = () => {
        history.push("/profile");
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
      {toggleFilter && (
            <PopUpContainer>
                <MdKeyboardArrowDown
                style={{
                    position: "absolute",
                    right: "3%",
                    height: "35px",
                    width: "auto",
                    cursor: "pointer",
                }}
                onClick={() => setToggleFilter(false)}
                />
                <FilterContainer>
                    <SubContainerButtons>
                        <FilterButtons>
                            <Option1 value="litter" onClick={(e) => setFilterValue(e.target.value)} >Litter</Option1>
                            <Option2 value="graffiti" onClick={(e) => setFilterValue(e.target.value)} >Graffiti</Option2>
                            <Option3 value="road_damage" onClick={(e) => setFilterValue(e.target.value)} >Road Damage</Option3>
                            <Option4 value="damage_to_public_property" onClick={(e) => setFilterValue(e.target.value)} >Damage to Public Property</Option4>
                            <Option5 value="insects_and_animals" onClick={(e) => setFilterValue(e.target.value)} >Insects and Animals</Option5>
                            <Option6 value="unmaintained_greenery" onClick={(e) => setFilterValue(e.target.value)} >Unmaintained Greenery</Option6>
                            <Option7 value="street_sign_issues" onClick={(e) => setFilterValue(e.target.value)} >Street Sign Issues</Option7>
                        </FilterButtons>
                    </SubContainerButtons>
                    <SubContainer>
                    <FilterButtonStyle onClick={ApplyClickEvent}>
                        Apply filter
                    </FilterButtonStyle>
                    </SubContainer>
                </FilterContainer>
            </PopUpContainer>
            )}

            <MenuContainer>
                    <Home>
                        <Logo src={home} alt="home" onClick={handleHomeClick}/>
                        <Text>Map</Text>
                    </Home>
                    <Filter>
                        <Logo src={filter} alt="filter" onClick={() => setToggleFilter(true)} />
                        <Text>Filter</Text>
                    </Filter>
                    <New>
                        <Logo src={newIssue} alt="new issue" onClick={handleNewIssueClick}/>
                        <Text>New Issue</Text>
                    </New>
                    <Issues>
                        <Logo src={listGreen} alt="issues" onClick={handleListClick}/>
                        <IssuesText>Issues</IssuesText>
                    </Issues>
                    <Profile>
                        <Logo src={user} alt="profile" onClick={handleUserClick}/>
                        <Text>Profile</Text>
                    </Profile>
            </MenuContainer>
    </>
  );
};
export default IssueList;
