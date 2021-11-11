import React, {useState, useEffect, useRef} from "react";
import Table from "../../components/Table/Table";
import AnalyticsContainer, { Title } from './AnalyticsStyled';
import ReactToPrint from 'react-to-print';
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import { Header, SubHeader, Body } from "./AnalyticsStyled";
import DropDownMultipleMenu from "../../components/DropDownMultipleMenu/DropDownMultipleMenu";
import svgAz from "../../assets/svgs/az-sort.svg"
import svgZa from "../../assets/svgs/za-sort.svg"
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";

const Analytics = () => {
    const [listIssues,setListIssues] = useState(null);
    const [listUsers,setListUsers] = useState(null);
    const [filteredSortedList,setFSList] = useState(null);
    const [azSorted,setAzSorted] = useState(true);
    const [subject, setSubject] = useState(null);
    const [fields, setFields] = useState(null);
    const [filter, setFilter] = useState(null);
    const [sorter, setSorter] = useState(null);
    const selections = useSelector((state)=>state.reportReducer.selectedItems);
    const dispatch = useDispatch();
    const [filterInput, setFilterInput] = useState('');
    // const svgAz = "../../assets/svgs/az-sort.svg";
    // const svgZa = "../../assets/svgs/za-sort.svg";
    const subjects = ['users', 'issues']
    const userFields = 
    [
     "id", "username", "first_name", "last_name",
     "email", "profile_picture", "upvoted_issues", "user_issues",
     "date_joined", "points", "status", "home_address",
    ];    

    const issueFields =
    [
        "id", "title", "content", "category",
        "status", "address", "longitude", "latitude",
        "city", "zip", "image", "created",
        "modified", "issue_comments", "upvote_count",
    ];

    const componentRef = useRef(null);

    const handleFilterInput = (event) => {
        setFilterInput(event.target.value)
        if (event.target.value !== '' && subject && (filter && filter !== '0')) { // If there's something to filter and subject is choosen
            if (subject === 'users'){
                applyFilter(event.target.value,listUsers)
            } else if (subject === 'issues') {
                applyFilter(event.target.value,listIssues)
            }
        } else { // if there's no word to filter
            if (subject === 'users'){
                setFSList(listUsers)
            } else if (subject === 'issues') {
                setFSList(listIssues)
            }
        }
    }

    const applyFilter = (word, oldList) => {
        let newList = [];
        if (word !== '') {
            newList = oldList.filter((item,ind) => {
                if (item[filter].toString().substring(0,word.length).toUpperCase() === word.toUpperCase()) {
                    return item;
                }
            });
        } else {
            newList = [...oldList];
        }
        setFSList(newList)
    }

    useEffect(() => {
        getListIssues();
        getListUsers();
    }, [])

    useEffect(() => {
        if (sorter) {
            sorting(sorter,azSorted?1:1)
        }
        setAzSorted(true);
    }, [sorter || azSorted])

    useEffect(() => {
        if (subject) { // Default fields for the table
            let newSelections = [];
            if (subject === 'users') {
                newSelections = ['id','username'];
                setFSList(listUsers);
            } else if (subject ==='issues') {
                newSelections = ['id','category'];
                setFSList(listIssues);
            } else {
                newSelections = [];
            }
            
            setFilter(null)
            setFilterInput('')
            dispatch({ // sending the new selections
                type: 'setItems',
                payload: newSelections
            })
        }
    },[subject])

    const getListIssues = async() => {
        const url = 'https://fix-my-city.app.propulsion-learn.ch/backend/api/issues/';

        const method = 'GET'; // method

        const config = { // configuration
        method : method,
        }

        const response = await fetch(url, config);  //fetching
        const data     = await response.json();  // getting the user

        setListIssues(data)

    }

    const getListUsers = async() => {
        const url = 'https://fix-my-city.app.propulsion-learn.ch/backend/api/users/';

        const method = 'GET'; // method

        const config = { // configuration
        method : method,
        }

        const response = await fetch(url, config);  //fetching
        const data     = await response.json();  // getting the user

        setListUsers(data)
    }

    const changeSubject = (newSubject) => {
        setSubject(newSubject)
    }

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
        setFilterInput('');
    }

    const changeSorter = (newSorter) => {
        setSorter(newSorter); // Only to be able to change the direction of sorting
    }

    const sorting = (newSorter, direction = 1) => {
        console.log(newSorter,direction,sorter,filteredSortedList)
        if (filteredSortedList) {
            let newList = [...filteredSortedList];
            if (sorter) {
                if (typeof newList[0][newSorter] === 'number') { // in case of numbers
                    newList.sort((item1,item2) => {
                        if (item1[newSorter] < item2[newSorter]) {
                            return -1 * direction;
                        }
                        if (item1[newSorter] > item2[newSorter]) {
                            return  1 * direction;
                        }
                        return 0;
                    });
                } else {
                    newList.sort((item1,item2) => { // in case of text
                        if (item1[newSorter].toUpperCase() < item2[newSorter].toUpperCase()) {
                            return -1 * direction;
                        }
                        if (item1[newSorter].toUpperCase() > item2[newSorter].toUpperCase()) {
                            return  1 * direction;
                        }
                        return 0;
                    });
                }
            }
            setFSList(newList)
        }
    }

    const changeField = (event) => {
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
        setFields(value)
    }

    const handleClickSort = () => {
        sorting(sorter,azSorted?-1:1);
        setAzSorted(!azSorted);
    }

    return (
        <AnalyticsContainer>
            <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Header id='header'>
                    <Navigation
                        showBackButton={true}
                        page={'report'}
                    />
                    <Title>Analytics</Title>
                </Header>
            </div>
            <div style={{width: '100%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <div style={{width: '80%', height: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #A5A5A5'}}>
                    <Body>
                        <Table ref={componentRef} listItems={filteredSortedList} selections={selections}></Table>
                    </Body>
                </div>
                <div style={{width: '20%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <SubHeader id='subheader'>
                        {/* A subject selector */}
                        <div id='divSubject'>
                            <label id='labelSubject' htmlFor="subject">Analytics</label>
                            <div id='menuSubject'>
                                <DropDownMenu  title = 'Subject' changeSubject={changeSubject} items={subjects}/>
                            </div>
                        </div>

                        {/* A Field selector */}
                        <div id='divFields' >
                            <label id="labelField" htmlFor="menuFields">Fields</label>
                            <DropDownMultipleMenu id="menuFields" selections={selections} subject={subject} items={subject==='users'?userFields:issueFields}/>
                        </div>
                        {/* A Filter */}
                        <div id='divFilter'>
                            <label id='labelFilter' htmlFor="subject">Filter</label>
                            <DropDownMenu id='menuFilter' title='Filter' changeSubject={changeFilter} items={selections}/>
                            <input id="inputFilter" type='text' onChange={(e) => handleFilterInput(e)} value={filterInput}></input>
                        </div>
                        {/* A sorter */}
                        <div id='divSorter'>
                            <label id='labelSorter'htmlFor="subject">Sort</label>
                            <DropDownMenu id='menuSorter' title='Sorter' changeSubject={changeSorter} items={selections}/>
                            <button id='buttonSorter' onClick={handleClickSort}>
                                <img id='iconSorter' src={azSorted?svgZa:svgAz} alt="my image"/>
                            </button>
                        </div>
                        <div id = "printTrigger" >
                            <ReactToPrint
                                trigger={() => <button id='printButton'>Print</button>}
                                content={() => componentRef.current}
                            />
                        </div>
                    </SubHeader>
                </div>
            </div>

        </AnalyticsContainer>
    )
}

export default Analytics;