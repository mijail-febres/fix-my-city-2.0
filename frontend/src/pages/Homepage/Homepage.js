import React, { useState, useEffect }from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useHistory } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user.png";
import newIssueGreen from "../../assets/images/new-LG.png";
import list from "../../assets/images/list.png";
import filter from "../../assets/images/filter.png";
import svgAnalytics from "../../assets/svgs/report.svg"
import { MdKeyboardArrowDown } from "react-icons/md";
import Div100vh from "react-div-100vh";
import Map from "../../components/Map/Map";
import { fetchProfileInfo } from "../../Axios/fetches";
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
    Analytics,
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
  } from "../../components/MenuFooter/MenuFooterStyled";
import {defaultTheme} from '../../globalstyles/Styles.js';
import {displayInstallNotification} from "../../pushnotifications";

const Homepage = () => {

    const dispatch = useDispatch();

    const [newIssue, setNewIssue] = useState(false); // it will trigger a snapshot of Map

    const filterValueRedux = useSelector((state) => state.filterReducer.filter);

    const [toggleFilter, setToggleFilter] = useState(false);

    // State to save current user's data
    const [currentUser, setCurrentUser] = useState(null);

    // Get token from redux state
    const token = localStorage.getItem("token");

    const [filterValue, setFilterValue] = useState(
        filterValueRedux[0] === "default" ? ["default"] : [filterValueRedux]
    );

    const optionValue = ["litter","graffiti","road_damage","damage_to_public_property","insects_and_animals",
                        "unmaintained_greenery","street_sign_issues"];
    const optionContent = ["Litter","Graffiti","Road Damage","Damage to Public Property","Insects and Animals",
                        "Unmaintained Greenery","Street Sign Issues"]
    const [optionColor, setOptionColor] = useState(Array(7).fill(false));

    const handleFilter = () => {
        dispatch({
        type: "applyFilter",
        payload: filterValue,
        });
    };

    useEffect(() => {
        handleFilter();
    }, [filterValue])

    // Initial useEffect: Get current user's data and fetching in order to get the issues
    useEffect(() => {
        //current_location();
        if (token) {
        const fetchProfile = async () => {
            const data = await fetchProfileInfo();
            setCurrentUser(data);
        };
        fetchProfile();
        }
    }, [token]);

    const handleClickOnFilter = (item,ind) => {
        let currentFilterValue = [...filterValue];
        if (currentFilterValue) {
            if (currentFilterValue.length === 1 && currentFilterValue[0] === 'default') {
                currentFilterValue = [];
                currentFilterValue.push(item);
            } else {
                if (currentFilterValue.indexOf(item) === -1) {
                    currentFilterValue.push(item);
                } else {
                    currentFilterValue.splice(currentFilterValue.indexOf(item),1);
                    if (currentFilterValue.length === 0) { // In case the array is empty, default should be the default value
                        currentFilterValue.push('default');
                    }
                }
            }
            let colors = [...optionColor];
            colors[ind] = !colors[ind];
            setOptionColor([...colors]);
        }
        setFilterValue([...currentFilterValue]);
    }

    const [coordinates, setCoordinates] = useState(null);

    const handleNewIssueClick = () => {
        setNewIssue(!newIssue);
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

    const handleAnalyticsClick = () => {
        history.push("/analytics");
    };

    return (
    <Div100vh>
        <Main>
            <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} newIssue={newIssue}/>

            <MenuContainer>
                <Home>
                    <Logo src={home} alt="home" onClick={handleHomeClick}/>
                    <Text>Map</Text>
                </Home>
                {coordinates === null?
                    <Filter>
                        <Logo src={filter} alt="filter" onClick={() => setToggleFilter(!toggleFilter)} />
                        <Text>Filter</Text>
                    </Filter>
                :
                    <Filter>
                        <Logo src={filter} alt="filter" onClick={() => setToggleFilter(true)} />
                        <Text>Filter</Text>
                    </Filter>
                }
                {currentUser?
                    ! currentUser.is_superuser?
                        coordinates === null?
                            <New>
                                <IssueTextGreen>Choose Location To Report Issue</IssueTextGreen>
                            </New>
                        :
                            <New>
                                <Logo src={newIssueGreen} alt="new issue" onClick={handleNewIssueClick}/>
                                <IssueText>New Issue</IssueText>
                            </New>
                    :null
                :null}
                <Issues>
                    <Logo src={list} alt="issues" onClick={handleListClick}/>
                    <Text>Issues</Text>
                </Issues>
                <Profile>
                    <Logo src={user} alt="profile" onClick={handleUserClick}/>
                    <Text>Profile</Text>
                </Profile>
                {currentUser?
                    currentUser.is_superuser?
                    <Analytics>
                        <Logo src={svgAnalytics} alt="report" onClick={handleAnalyticsClick}/>
                        <Text>Analytics</Text>
                    </Analytics>
                    :null
                :null}
            </MenuContainer>

            {toggleFilter && (
                <PopUpContainer>
                    <FilterContainer>
                        <SubContainerButtons>
                            <FilterButtons>
                                {optionContent.map((option,index) => {
                                    return(
                                        <Option1
                                            key={index}
                                            value={optionValue[index]}
                                            onClick={(e) => handleClickOnFilter(e.target.value, index)}
                                            style={{backgroundColor : optionColor[index]?defaultTheme.greenColorTransparent:defaultTheme.greyColorTransparent}}
                                        > 
                                            {option}
                                        </Option1>
                                    )
                                })}
                            </FilterButtons>
                        </SubContainerButtons>
                    </FilterContainer>
                </PopUpContainer>
            )}
        </Main>
    </Div100vh>
    );
  };
  
  export default Homepage;

  displayInstallNotification();