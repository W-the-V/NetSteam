import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { deactivateProfile } from "../../store/Modals";
import { edit } from "../../store/session";
import "./Profile.css";

function Profile({}) {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.modal.profile);
  const sessionUser = useSelector((state) => state.session.user);
  const pictures = useSelector((state) => state.profile.pictures);
  const [userName, setUsername] = useState(sessionUser.username);
  const [pictureId, setPictureId] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const onclick = () => {
    dispatch(deactivateProfile());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      edit(
        sessionUser.id,
        { username: userName, profilePictureId: pictureId },
        sessionUser.username
      )
    );
    dispatch(deactivateProfile());
  };

  useEffect(() => {
    setPictureId(sessionUser.profilePictureId);
    setProfilePicture(pictures[sessionUser.profilePictureId]?.imageLink);
  }, [pictures]);

  const onPictureClick = (id) => {
    if (pictureId) {
      document.getElementById(pictureId).classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
    setPictureId(id);
    setProfilePicture(pictures[id].imageLink);
  };
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
        <div className="pictureShell">
          {pictures &&
            Object.values(pictures).map((picture, i) =>
              i === pictureId - 1 ? (
                <img
                  className="selectPicture active"
                  src={picture.imageLink}
                  id={picture.id}
                  onClick={() => onPictureClick(picture.id)}
                ></img>
              ) : (
                <img
                  className="selectPicture"
                  src={picture.imageLink}
                  id={picture.id}
                  onClick={() => onPictureClick(picture.id)}
                ></img>
              )
            )}
        </div>
      </div>
    </Modal>
  );
}
export default Profile;
