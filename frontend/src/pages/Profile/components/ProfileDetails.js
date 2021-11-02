import React, { useState } from "react";
import { UserDetails, ProfileDetailsSection } from "../ProfileStyled";
import pen from "../../../assets/svgs/pen_black.svg";
import EditProfileField from "./EditProfileField";
import { 
  ProfileDetailTitle,
  Instruction,
  PassWordInput
 } from "../../ProfileReadOnly/ProfileReadOnlyStyled";

const ProfileDetails = (props) => {
  const info = props.myProfileInfo;

  const [showEditProfileField, setShowEditProfileField] = useState(false);
  const [currentEditField, setCurrentEditField] = useState("");
  const [currentEditFieldValue, setCurrentEditFieldValue] = useState("");
  const [currentEditFieldName, setCurrentEditFieldName] = useState("");
  const [currentEditFieldAPIName, setCurrentEditFieldAPIName] = useState("");
  const [shouldIrender, setShouldIRender] = useState(false);

  const editButtonOnClickHandler = (field, displayName, APIName) => {
    setCurrentEditField(field);
    setShowEditProfileField(true);
    setCurrentEditFieldValue(info[field]);
    setCurrentEditFieldName(displayName);
    setCurrentEditFieldAPIName(APIName);
  };

  return (
    <>
      <ProfileDetailsSection>
        <ProfileDetailTitle>Profile Details</ProfileDetailTitle>
        <Instruction>- make changes and return to previous page to save them -</Instruction>
      </ProfileDetailsSection>
      <UserDetails>
        <aside className="left">
          <div className="fieldAndEditButton">
            <h2>Username</h2>
            <button
              id="editButton"
              onClick={() =>
                editButtonOnClickHandler("userName", "Username", "username")
              }
            >
              <img id="editIcon" src={pen} alt="edit"></img>
            </button>
          </div>
          <p>{info.userName}</p>

          <div className="fieldAndEditButton">
            <h2>First name</h2>
            <button
              id="editButton"
              onClick={() =>
                editButtonOnClickHandler(
                  "firstName",
                  "First name",
                  "first_name"
                )
              }
            >
              <img id="editIcon" src={pen} alt="edit"></img>
            </button>
          </div>
          <p>{info.firstName}</p>

          <div className="fieldAndEditButton">
            <h2>Last name</h2>
            <button
              id="editButton"
              onClick={() =>
                editButtonOnClickHandler(
                  "lastName", 
                  "Last name", 
                  "last_name"
                  )
              }
            >
              <img id="editIcon" src={pen} alt="edit"></img>
            </button>
          </div>
          <p>{info.lastName}</p>
        </aside>
        <aside className="right">
          <div className="fieldAndEditButton">
            <h2>Email</h2>
            <button
              id="editButton"
              onClick={() =>
                editButtonOnClickHandler("email", "Email", "email")
              }
            >
              <img id="editIcon" src={pen} alt="edit"></img>
            </button>
          </div>
          <p>{info.email}</p>

          <div className="fieldAndEditButton">
            <h2>Password</h2>
            <button id="editButton">
              <img id="editIcon" src={pen} alt="edit"></img>
            </button>
          </div>
          <PassWordInput
            type="password"
            id="password"
            value="TO BE IMPLEMENTED"
          ></PassWordInput>
        </aside>
      </UserDetails>
      {showEditProfileField === true ? (
        <EditProfileField
          setShowEditProfileField={setShowEditProfileField}
          setShouldIRender={setShouldIRender}
          currentEditField={currentEditField}
          currentEditFieldValue={currentEditFieldValue}
          currentEditFieldName={currentEditFieldName}
          currentEditFieldAPIName={currentEditFieldAPIName}
        />
      ) : null}
    </>
  );
};
export default ProfileDetails;
