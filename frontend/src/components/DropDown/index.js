import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activateProfile,
  deactivateProfile,
  deactivateFocus,
} from "../../store/Modals";
import * as sessionActions from "../../store/session";
import "./DropDown.css";
const DropDown = ({
  setSearchTerm,
  setSearchState,
  onclickSearch,
  searchState,
}) => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.modal.profile);
  const logout = (e) => {
    e.preventDefault();
    document
      .querySelector(".dropDownOuterShell")
      .classList.add("hiddenComment");
    setSearchTerm("");
    if (searchState) onclickSearch();
    dispatch(deactivateProfile());
    dispatch(deactivateFocus());
    dispatch(sessionActions.logout());
  };
  const devHover = () => {
    document
      .querySelector(".dropDownOuterShell")
      .classList.add("hiddenComment");
    document.querySelector(".userNameShell").classList.remove("active");
  };
  const profileClick = () => {
    if (!profileState) {
      document
        .querySelector(".dropDownOuterShell")
        .classList.add("hiddenComment");
      setSearchTerm("");
      if (searchState) onclickSearch();
      dispatch(deactivateFocus());
      dispatch(activateProfile());
    } else dispatch(deactivateProfile());
  };
  return (
    <div
      className="dropDownOuterShell hiddenComment"
      onMouseLeave={() => devHover()}
    >
      <i className="fas fa-caret-up upCaret"></i>
      <div className="dropDownShell">
        <div className="dropDownBtn" onClick={profileClick}>
          Profile
        </div>
        <div className="dropDownBtn" onClick={logout}>
          Log Out
        </div>
      </div>
    </div>
  );
};
export default DropDown;
