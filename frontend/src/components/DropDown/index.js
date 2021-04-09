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
  return (
    <div className="dropDownOuterShell">
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
