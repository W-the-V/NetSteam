import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchModal from "../SearchModal";

import "./Navigation.css";
import src from "../../images/logotext.png";
import DropDown from "../DropDown";
import DeveloperButton from "../DeveloperButton";
import {
  activateLogin,
  deactivateLogin,
  activateSignUp,
  deactivateSignUp,
} from "../../store/Modals";

import { changeProfile, changeDeveloper } from "../../store/showMenu";
import { getAllVideos } from "../../store/videos";
import * as sessionActions from "../../store/session";

function Navigation({
  isLoaded,
  searchTerm,
  setSearchTerm,
  searchState,
  setSearchState,
}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onclickSearch = () => {
    if (!searchState) {
      document.querySelector(".searchBtnShell").classList.add("active");
      setSearchState(true);
    } else {
      document.querySelector(".searchBtnShell").classList.remove("active");
      setSearchState(false);
    }
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(deactivateLogin());
    dispatch(deactivateSignUp());
    dispatch(sessionActions.logout());
  };
  const login = () => {
    dispatch(deactivateSignUp());
    dispatch(activateLogin());
  };
  const demoLogin = async () => {
    const res = await dispatch(
      sessionActions.login({
        credential: "demo@demo.com",
        password: "password",
      })
    );
    dispatch(deactivateSignUp());
    dispatch(deactivateLogin());
  };
  const profileHover = () => {
    if (
      !document
        .querySelector(".abtDropDownOuterShell")
        .classList.contains("hidden")
    ) {
      document
        .querySelector(".abtDropDownOuterShell")
        .classList.add("hiddenComment");
      document.querySelector(".navButton").classList.remove("active");
    }
    document
      .querySelector(".dropDownOuterShell")
      .classList.remove("hiddenComment");
    document.querySelector(".userNameShell").classList.add("active");
  };
  const devHover = () => {
    if (
      !document
        .querySelector(".dropDownOuterShell")
        .classList.contains("hiddenComment")
    ) {
      document
        .querySelector(".dropDownOuterShell")
        .classList.add("hiddenComment");
      document.querySelector(".userNameShell").classList.remove("active");
    }
    document
      .querySelector(".abtDropDownOuterShell")
      .classList.remove("hiddenComment");
    document.querySelector(".navButton").classList.add("active");
  };
  return (
    <>
      <div className="navOuterShell">
        {searchTerm && (
          <SearchModal
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onclickSearch={onclickSearch}
            searchState={searchState}
            setSearchState={setSearchState}
          />
        )}
        <div className="navBar">
          <NavLink exact to="/" className="homeLink">
            <button className="homeButton">
              <img className="logoText" src={src} alt="Logo"></img>
            </button>
          </NavLink>
          {sessionUser && (
            <div className="rightNavShell">
              <div className="searchBtnShell">
                <div className="searchIcoShell" onClick={() => onclickSearch()}>
                  <i className="fas fa-search searchBtnIcon"></i>
                </div>
                <input
                  type="text"
                  className="searchInputBox"
                  placeholder="Search by title or genre"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </div>
              <div
                className="userNameShell"
                onMouseEnter={() => profileHover()}
              >
                <img
                  src={sessionUser.ProfilePicture.imageLink}
                  className="profilePictureNav"
                ></img>
                <i className="fas fa-caret-down downArrow"></i>
              </div>
              <button className="navButton" onMouseEnter={() => devHover()}>
                About
                <i className="fas fa-caret-down downArrow"></i>
              </button>
            </div>
          )}
          {!sessionUser && (
            <div className="rightNavShell">
              <button className="navButton" onClick={login}>
                Login
              </button>
              <button className="navButton" onClick={demoLogin}>
                Demo
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="dropDownOuterMostShell">
        <DropDown />
        <DeveloperButton />
      </div>
    </>
  );
}

export default Navigation;
