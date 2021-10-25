import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main, SaveBox } from "./ProfileReadOnlyStyled";
import ProfileDetails from "./components/ProfileDetails";
import ProfileMainInfoReadOnly from "./components/ProfileMainInfoReadOnly";
import Navigation from "../../components/Navigation/Navigation";
import { fetchProfileInfo } from "../../Axios/fetches";
import { fetchLatestProfileInfoAndUpdateRedux } from "../../middleware/fetchUpdateRedux";
import IssueList from "../../components/IssueList/issueList";

const ProfileReadOnly = (props) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserInfoAndStoreInState = async () => {
      const url = window.location.href;
      const userId = url.split("/").slice(-2)[0];
      //console.log(userId);     
      const data = await fetchProfileInfo(userId);
      //console.log(data);
      setUserInfo(data);
    };
    fetchUserInfoAndStoreInState();
  }, []);

  

  return (
    <>
      <Navigation showBackButton={true} page={"profile"} />
      <Main>
        {userInfo.id ? (
          <>
            <ProfileMainInfoReadOnly userInfo={userInfo} />
            <IssueList
              hideNavBar={true}
              userIdReadOnly={userInfo.id}
            ></IssueList>
          </>
        ) : null}
        <SaveBox />
      </Main>
    </>
  );
};
export default ProfileReadOnly;
