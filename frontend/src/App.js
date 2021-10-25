import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login";
import CreateIssue from "./pages/CreateIssue/CreateIssue";
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import ProfileReadOnly from "./pages/ProfileReadOnly/ProfileReadOnly"
import {withAuth} from "../src/withAuth/withAuth"
import SignUp from "../src/pages/SignUp/SignUp";
import SignUpForm from './pages/SignUp/SignUpForm';
import IssueList from './components/IssueList/issueList';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withAuth(Homepage)}/> 
        <Route exact path="/createissue" component={withAuth(CreateIssue)}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile/:id" component={withAuth(ProfileReadOnly)}/>         
        <Route exact path="/profile" component={withAuth(Profile)}/> 
        <Route exact path="/issues" component={withAuth(IssueList)}/>
        <Route exact path="/signup" component={SignUp} /> 
        <Route exact path="/signupform" component={SignUpForm} />     
      </Switch>
    </BrowserRouter>
  );
}

export default App;
