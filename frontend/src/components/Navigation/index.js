import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchModal from "../SearchModal";

import "./Navigation.css";
import src from "../../images/logotext.png";
import {
  activateLogin,
  deactivateLogin,
  activateSignUp,
  deactivateSignUp,
} from "../../store/Modals";
import { getAllVideos } from "../../store/videos";
import * as sessionActions from "../../store/session";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [searchState, setSearchState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
  return (
    <div className="navOuterShell">
      {searchTerm && (
        <SearchModal
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchState={searchState}
          setSearchState={setSearchState}
          onclickSearch={onclickSearch}
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
            <div className="userNameShell">
              <div className="navUserName">{sessionUser.email}</div>
            </div>
            <button className="navButton" onClick={logout}>
              Log Out
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
  );
}

export default Navigation;
