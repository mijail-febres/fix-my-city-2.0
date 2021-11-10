import React, {useState} from 'react';
import {
    NameContainer, 
    IssueContainer, 
    StatusContainer, 
    MenuContainer,
    IconAndLevelContainer,
    GameIcon,
    LogoutButton
} from '../ProfileStyled';
import {
    Home,
    New,
    Issues,
    Profile,
    Logo,
    ProfileText,
    Text,
} from '../../../components/MenuFooter/MenuFooterStyled';
import home from "../../../assets/images/home.png";
import userGreen from "../../../assets/images/user-LG.png";
import newIssue from "../../../assets/images/new.png";
import list from "../../../assets/images/list.png";
import UploadPic from '../../../assets/svgs/upload_black.svg';
import defaultAvatar from "../../../assets/images/default-avatar.png"
import {patchProfileInfo} from "../../../Axios/fetches"
import pen from "../../../assets/svgs/pen_black.svg"
import scout from "../../../assets/images/scout.png"
import knight from "../../../assets/images/knight.png"
import hero from "../../../assets/images/hero.png"
import { useHistory } from "react-router-dom";


const ProfileMainInfo = (props) => {
    const info = props.myProfileInfo; 

    const [imageFile, setImageFile] = useState("");
    const [imageURL,setImageURL] = useState("");


    const editProfileOnClickHandler = () => {
        props.toggleShowEditMode(true);
    }

    const uploadPictureOnChangeHandler = (target) => {
        //console.log("Picture changed.");
        if (target.files) {
            if (target.files.length !== 0) {
              const file = target.files[0];
              setImageFile(file);
              const newUrl = URL.createObjectURL(file);
              setImageURL(newUrl);  
              // below: send patch request to API, then fetch profile info again and update redux
              let formdata = new FormData();
              formdata.append("profile_picture", file);
              patchProfileInfo(formdata);
            }
          }
    }

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
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      history.push("/");
    };
  


return (
    <>
        <NameContainer>
        <aside className='left'>
            <img alt="profile_avatar" className="avatar" src={imageURL? imageURL : info.avatar? info.avatar : defaultAvatar}></img>
            {props.showEditMode===true?
                <>
                <input type="file" accept="image/*" id="uploadInput" onChange={(e) => uploadPictureOnChangeHandler(e.target)}></input>
                <label id="uploadLabel" htmlFor="uploadInput">
                    <img id="uploadIcon" src={UploadPic} alt="upload"></img>
                    <p>Upload</p>
                </label>
                </>              
            :null}            
        </aside>
        <aside className='middle'>
            <div id="nameAndStatus">            
                <h1>{info.firstName} {info.lastName}</h1>                
            </div>

            <p>Member since {info.dateJoined.substr(0,10)}</p>
            
        </aside> 
        <aside className='right'>
            {props.showEditMode===false?
            <button id="editButton" onClick={()=>editProfileOnClickHandler("userName","Username","username")}><img id="editIcon" src={pen} alt="edit"></img>Edit</button>
                :null} 
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton> 
        </aside> 
        </NameContainer>
            <StatusContainer>
                <aside className='left'>
                    {/* <img alt="points" src={PointsPic}></img> */}
                    <p>Points</p>
                    <p className='blackP'>{info.points}</p>
                </aside>

                <div className='middle'>
                    {/* <img alt="tools" src={ToolsPic}></img> */}
                    <p>Level</p>
                    <div id="iconAndLevel">                        
                        <p className='blackP'>{info.level}</p>
                    </div>                    
                </div>  
                <div className='right'>
                    <p className='gameIcon'>
                        {info.level === "scout" ? <GameIcon src={scout} alt ="scout"/> : " "}
                        {info.level === "hero" ? <GameIcon src={hero} alt ="hero"/> : " "}
                        {info.level === "knight" ? <GameIcon src={knight} alt ="knight"/> : " "}
                    </p>
                </div>  
                           
            </StatusContainer>
            
            
            <IssueContainer>
            <aside className='left'>
                <h2>Issues reported: {info.issuesReported.length}</h2>
            </aside>
            <aside className='right'>
                <h2>Issues upvoted: {info.issuesUpvoted.length}</h2>
            </aside>
            </IssueContainer>

            <MenuContainer>
                    <Home>
                        <Logo src={home} alt="home" onClick={handleHomeClick}/>
                        <Text>Map</Text>
                    </Home>
                    {/* <Filter>
                        <Logo src={filter} alt="filter" onClick={() => setToggleFilter(true)} />
                        <Text>Filter</Text>
                    </Filter> */}
                    <New>
                        <Logo src={newIssue} alt="new issue" onClick={handleNewIssueClick}/>
                        <Text>New Issue</Text>
                    </New>
                    <Issues>
                        <Logo src={list} alt="issues" onClick={handleListClick}/>
                        <Text>Issues</Text>
                    </Issues>
                    <Profile>
                        <Logo src={userGreen} alt="profile" onClick={handleUserClick}/>
                        <ProfileText>Profile</ProfileText>
                    </Profile>
            </MenuContainer>
        </>
)

}

export default ProfileMainInfo
