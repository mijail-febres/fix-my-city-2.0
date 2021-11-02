import React, { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user.png";
import newIssueGreen from "../../assets/images/new-LG.png";
import list from "../../assets/images/list.png";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Div100vh from "react-div-100vh";
import Map from "../../components/Map/Map";
import {Main} from "./Styled"
import {
    MenuContainer,
    Home,
    Filter,
    New,
    Issues,
    IssueText,
    IssueTextGreen,
    Profile,
    Logo,
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

const Homepage = () => {

    const dispatch = useDispatch();

    const [newIssue, setNewIssue] = useState(false); // it will trigger a snapshot of Map

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

    const [coordinates, setCoordinates] = useState(null);

    const handleNewIssueClick = () => {
        setNewIssue(!newIssue);
        dispatch({ type: "setCoordinates", payload: coordinates });
        history.push("/createissue");
        console.log(newIssue);
    };

    const history = useHistory();
  
    const handleHomeClick = () => {
        history.push("/");
    };

    const handleListClick = () => {
        history.push("/issues");
    };

    const handleUserClick = () => {
        history.push("/profile");
    };

    return (
    <Div100vh>
        <Main>
            <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} newIssue={newIssue}/>
            {coordinates === null ? (
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
                      <IssueTextGreen>Choose Location To Report Issue</IssueTextGreen>
                    </New>
                    <Issues>
                      <Logo src={list} alt="issues" onClick={handleListClick}/>
                      <Text>Issues</Text>
                    </Issues>
                    <Profile>
                      <Logo src={user} alt="profile" onClick={handleUserClick}/>
                      <Text>Profile</Text>
                    </Profile>
                </MenuContainer>
                        )
             : (
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
                        <Logo src={newIssueGreen} alt="new issue" onClick={handleNewIssueClick}/>
                        <IssueText>New Issue</IssueText>
                    </New>
                    <Issues>
                        <Logo src={list} alt="issues" onClick={handleListClick}/>
                        <Text>Issues</Text>
                    </Issues>
                    <Profile>
                        <Logo src={user} alt="profile" onClick={handleUserClick}/>
                        <Text>Profile</Text>
                    </Profile>
                </MenuContainer>
            )
            }

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
        </Main>
    </Div100vh>
    );
  };
  
  export default Homepage;