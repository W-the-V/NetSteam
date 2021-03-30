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
  return (
    <div className="navOuterShell">
      <div className="navBar">
        <NavLink exact to="/" className="homeLink">
          <button className="homeButton">
            <img className="logoText" src={src} alt="Logo"></img>
          </button>
        </NavLink>
        {sessionUser && (
          <button className="navButton" onClick={logout}>
            Log Out
          </button>
        )}
        {!sessionUser && (
          <button className="navButton" onClick={login}>
            Login
          </button>
        )}
        {/* <button className="menuButton" onClick={handleSubmit}>
          Demo
        </button> */}
      </div>
    </div>
  );
}

export default Navigation;
