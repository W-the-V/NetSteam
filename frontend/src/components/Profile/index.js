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
  const [confirmUserName, setConfirmUserName] = useState(sessionUser.username);
  const [pictureId, setPictureId] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [errors, setErrors] = useState();
  const onclick = () => {
    dispatch(deactivateProfile());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName !== confirmUserName) {
      return setErrors("Usernames must match");
    }
    const res = await dispatch(
      edit(
        sessionUser.id,
        { username: userName, profilePictureId: pictureId },
        sessionUser.username
      )
    );
    if (await res.errors) {
      return setErrors(res.errors);
    }
    setErrors("");
    dispatch(deactivateProfile());
    return res;
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
          <i className="fas fa-times profileCloseIco" onClick={onclick}></i>
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
                maxLength="30"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="profileInputTextShell">
              <div className="profileInputTextLabel"> Confirm Username : </div>
              <input
                type="text"
                value={confirmUserName}
                maxLength="30"
                className="profileInputText"
                onChange={(e) => setConfirmUserName(e.target.value)}
              ></input>
            </div>
            <div className="profileBtnShell">
              {errors && <div className="profileBtnText">{errors}</div>}
              <button className="changeProfileBtn">Submit</button>
            </div>
          </form>
        </div>
        <div className="chooseTitle">Select Profile Picture</div>
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
