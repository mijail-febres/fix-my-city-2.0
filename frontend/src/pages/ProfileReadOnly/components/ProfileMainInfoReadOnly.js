import React, {useEffect, useState} from 'react';
import {NameContainer, IssueContainer, StatusConatiner } from '../ProfileReadOnlyStyled';
import UploadPic from '../../../assets/svgs/upload_black.svg';
import defaultAvatar from "../../../assets/images/default-avatar.png"
import {patchProfileInfo} from "../../../Axios/fetches"


const ProfileMainInfoReadOnly = (props) => {    
    const info = props.userInfo;
    console.log(info);   

    const [imageFile, setImageFile] = useState("");
    const [imageURL,setImageURL] = useState("");

    //console.log(info)

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
              formdata.append("profile_picture", imageFile);
              patchProfileInfo(formdata);
            }
          }
    }


return (
    
    
    <>           
        <NameContainer>          
      
        <aside className='left'>
            <img alt="profile_avatar" className="avatar" src={imageURL? imageURL : info.profile_picture? info.profile_picture : defaultAvatar}></img>            
        </aside>
        <aside className='right'>
            <h1>{info.first_name} {info.last_name}</h1>
            <p>Member since {info.date_joined.substr(0,10)}</p>
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
       
       
        </NameContainer>

            <StatusConatiner>
                <aside className='left'>
                    
                    <p>Points</p>
                    <p className='blackP'>{info.points}</p>
                </aside>

                <div className='middle'>
                    
                    <p>Level</p>
                    <p className='blackP'>{info.status}</p>
                </div>                
            </StatusConatiner>

            <IssueContainer>
            <aside className='left'>
                <h2>Issues reported</h2>
                <h2>Issues upvoted</h2>
            </aside>
            <aside className='right'>
                <h2>{info.user_issues.length}</h2>
                <h2>{info.upvoted_issues.length}</h2>
            </aside>
            </IssueContainer>    
        </>       
    
    )
}

export default ProfileMainInfoReadOnly
