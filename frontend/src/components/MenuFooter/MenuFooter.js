import React from "react";
import { useHistory } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user.png";
import newIssueGreen from "../../assets/images/new-LG.png";
import list from "../../assets/images/list.png";
import filter from "../../assets/images/filter.png";
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
  } from "./MenuFooterStyled"

const MenuFooter = () => {

    const history = useHistory();
  
    const handleHomeClick = () => {
        history.push("/");
    };

    const handleFilterClick = () => {
        history.push("/"); //replace with pop up of filters - ternary
    };

    const handleNewIssueClick = () => {
        history.push("/createissue");
    };

    const handleListClick = () => {
        history.push("/issues");
    };

    const handleUserClick = () => {
        history.push("/profile");
    };

    return (
      <MenuContainer>
            <Home>
                <Logo src={home} alt="home" onClick={handleHomeClick}/>
                <Text>Map</Text>
            </Home>
            <Filter>
                <Logo src={filter} alt="filter" onClick={handleFilterClick} />
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
    );
  };
  
  export default MenuFooter;