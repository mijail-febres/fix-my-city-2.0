import React, {useState, useEffect, useRef} from "react";
import Table from "../../components/Table/Table";
import ReportContainer, { Title } from './ReportStyled';
import ReactToPrint from 'react-to-print';
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import { Header, SubHeader, Body } from "./ReportStyled";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";

const Report = () => {
    const [listIssues,setListIssues] = useState(null);
    const [listUsers,setListUsers] = useState(null);
    // const [subject, setSubject] = useState('users');
    const [subject, setSubject] = useState(null);
    const [fields, setFields] = useState(null);
    const selections = useSelector((state)=>state.reportReducer.selectedItems);
    const dispatch = useDispatch();
    const userFields = 
    [
     "id", "username", "first_name", "last_name",
     "email", "profile_picture", "upvoted_issues", "user_issues",
     "date_joined", "points", "status", "home_address",
    ];    

    const issueFields =
    [
        "id", "title", "content", "category",
        "status", "adress", "longitude", "latitude",
        "city", "zip", "image", "created",
        "modified", "issue_comments", "upvote_count",
    ];

    const componentRef = useRef(null);

    useEffect(() => {
        getListIssues();
        getListUsers();
    }, [])

    // useEffect(()=>{
    // },[selections])

    useEffect(() => {
        if (subject) { // Default fields for the table
            let newSelections = [];
            if (subject === 'users') {
                newSelections = ['id','username'];
            } else if (subject ==='issues') {
                newSelections = ['id','category'];
            } else {
                newSelections = [];
            }
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

    const changeField = (event) => {
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
        setFields(value)
    }

    return (
        <ReportContainer>
            <Header id='header'>
                <Navigation
                    showBackButton={true}
                    page={'report'}
                />
                <Title>Report</Title>
            </Header>
            <SubHeader id='subheader'>
                <div id='divSubject'>
                    <label htmlFor="subject">Report:</label>
                    <select
                        name="subject"
                        id="subject"
                        onChange={(e) => changeSubject(e.target.value)}
                    >
                        <option className='SubjectOption' value="select option">--Select Option--</option>
                        <option className='SubjectOption' value="users">Users</option>
                        <option className='SubjectOption' value="issues">Issues</option>
                    </select>
                </div>
                <div id='divFields' >
                    <label htmlFor="fields">Fields:</label>
                    <DropDownMenu selections={selections} subject={subject} items={subject==='users'?userFields:issueFields}/>
                </div>
                <ReactToPrint
                    trigger={() => <button id='printButton'>Print</button>}
                    content={() => componentRef.current}
                />
            </SubHeader>
            <Body>
                <Table ref={componentRef} listItems={subject==='users'?listUsers:listIssues} selections={selections}></Table>
            </Body>
        </ReportContainer>
    )
}

export default Report;