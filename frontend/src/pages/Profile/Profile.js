import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  ProfilePage,
  Main, 
  //UserDetails, 
  //LastReported, 
  SaveBox,
  EditProfile
} from "./ProfileStyled";
import ProfileDetails from "./components/ProfileDetails";
import ProfileMainInfo from "./components/ProfileMainInfo";
import Navigation from "../../components/Navigation/Navigation";
import { fetchLatestProfileInfoAndUpdateRedux } from "../../middleware/fetchUpdateRedux";
import IssueList from "../../components/IssueList/issueList";
import svgPlant from "../../components/Map/Svg";

const Profile = () => {
  const dispatch = useDispatch();
  const myProfileInfo = useSelector((state) => state.profileInfoReducer.info);

  useEffect(() => {
    fetchLatestProfileInfoAndUpdateRedux(dispatch);
  }, []);

  const [showEditMode, toggleShowEditMode] = useState(false);

  const goBack = showEditMode === true ? "profileDetails" : "profile";

  return (
    <ProfilePage>
      <Navigation
        showBackButton={true}
        page={goBack}
        toggleShowEditMode={toggleShowEditMode}
      />
      <Main>
        <ProfileMainInfo
          myProfileInfo={myProfileInfo}
          showEditMode={showEditMode}
          toggleShowEditMode={toggleShowEditMode}
        />
        {showEditMode === true ? (
          <ProfileDetails myProfileInfo={myProfileInfo} />
        ) : null}

        {showEditMode === false ? (
          <IssueList hideNavBar={true} profile></IssueList>
        ) : null}
        <SaveBox></SaveBox>
      </Main>
    </ProfilePage>
  );
};
export default Profile;
