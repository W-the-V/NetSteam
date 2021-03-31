import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Navigation.css";
import src from "../../images/logotext.png";
import {
  activateLogin,
  deactivateLogin,
  activateSignUp,
  deactivateSignUp,
} from "../../store/Modals";
import * as sessionActions from "../../store/session";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
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
  const demoLogin = () => {
    dispatch(
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
      <div className="navBar">
        <NavLink exact to="/" className="homeLink">
          <button className="homeButton">
            <img className="logoText" src={src} alt="Logo"></img>
          </button>
        </NavLink>
        {sessionUser && (
          <div className="rightNavShell">
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
