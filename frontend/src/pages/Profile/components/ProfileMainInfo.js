import React, {useState} from 'react';
import {NameContainer, IssueContainer, StatusConatiner, IconAndLevelContainer} from '../ProfileStyled';
import UploadPic from '../../../assets/svgs/upload_black.svg';
import defaultAvatar from "../../../assets/images/default-avatar.png"
import {patchProfileInfo} from "../../../Axios/fetches"
import pen from "../../../assets/svgs/pen_black.svg"
import scout from "../../../assets/svgs/scout.svg"
import knight from "../../../assets/svgs/knight.svg"
import hero from "../../../assets/svgs/hero.svg"



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
        <aside className='right'>
            <div id="nameAndStatus">            
                <h1>{info.firstName} {info.lastName}
                {props.showEditMode===false?
                <button id="editButton" onClick={()=>editProfileOnClickHandler("userName","Username","username")}><img id="editIcon" src={pen} alt="edit"></img></button>
                :null}            
                </h1>                
            </div>
            
            <p>Member since {info.dateJoined.substr(0,10)}</p>
            
        </aside>  
        </NameContainer>
            <StatusConatiner>
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
                <div className = "right">
                    
                </div>    
                           
            </StatusConatiner>
            
            
            <IssueContainer>
            <aside className='left'>
                <h2>Issues reported</h2>
                <h2>Issues upvoted</h2>
            </aside>
            <aside className='right'>
                <h2>{info.issuesReported.length}</h2>
                <h2>{info.issuesUpvoted.length}</h2>
            </aside>
            </IssueContainer>
        </>
)

}

export default ProfileMainInfo
