import React, { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user.png";
import newIssueGreen from "../../assets/images/new-LG.png";
import list from "../../assets/images/list.png";
import filter from "../../assets/images/filter.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    MenuContainer,
    Home,
    Filter,
    New,
    Issues,
    IssueText,
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
  } from "./MenuFooterStyled"

const MenuFooter = () => {

    const dispatch = useDispatch();

    const filterValueRedux = useSelector((state) => state.filterReducer.filter);

    const [toggleFilter, setToggleFilter] = useState(false);

    const [filterValue, setFilterValue] = useState(
        filterValueRedux === "default" ? "default" : filterValueRedux
    );

    const [coordinates, setCoordinates] = useState(null);

    const handleNewIssueClick = () => {
        dispatch({ type: "setCoordinates", payload: coordinates });
        history.push("/createissue");
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
        <>
        
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
        </>     
    );
};
  
export default MenuFooter;