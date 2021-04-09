import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./DropDown.css";
const DropDown = () => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  const devHover = () => {
    document
      .querySelector(".dropDownOuterShell")
      .classList.add("hiddenComment");
    document.querySelector(".userNameShell").classList.remove("active");
  };
  return (
    <div
      className="dropDownOuterShell hiddenComment"
      onMouseLeave={() => devHover()}
    >
      <i className="fas fa-caret-up upCaret"></i>
      <div className="dropDownShell">
        <div className="dropDownBtn">Profile</div>
        <div className="dropDownBtn" onClick={logout}>
          Log Out
        </div>
      </div>
    </div>
  );
};
export default DropDown;
