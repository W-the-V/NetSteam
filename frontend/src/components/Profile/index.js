import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { activateProfile, deactivateProfile } from "../../store/Modals";
import { getPictures } from "../../store/profile";
import "./Profile.css";

function Profile({}) {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.modal.profile);
  const sessionUser = useSelector((state) => state.session.user);
  const [userName, setUsername] = useState(sessionUser.username);
  const [profilePicture, setProfilePicture] = useState(
    sessionUser.ProfilePicture.imageLink
  );
  const onclick = () => {
    dispatch(deactivateProfile());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(getPictures());
  }, []);
  return (
    <Modal
      isOpen={profileState}
      onRequestClose={onclick}
      contentLabel="Signup"
      className="profileInner"
      overlayClassName="profileOuter"
      shouldFocusAfterRender={false}
    >
      <div className="profileOuterShell">
        <div className="profileTitle">
          <div className="profileTitleInner">Edit Profile</div>
          <i class="fas fa-times profileCloseIco" onClick={onclick}></i>
        </div>
        <div className="profilePictureShell">
          <img src={profilePicture} className="userProfilePicture"></img>
          <form className="profileForm" onSubmit={handleSubmit}>
            <div className="profileInputTextShell">
              <div className="profileInputTextLabel">Change Username : </div>
              <input
                type="text"
                value={userName}
                className="profileInputText"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="profileBtnShell">
              <button className="chooseProfileBtn">
                Change Profile Picture
              </button>
              <button className="changeProfileBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
export default Profile;
