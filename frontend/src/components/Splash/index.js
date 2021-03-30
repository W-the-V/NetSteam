import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUpModal from "../SignUpModal";
import {
  activateLogin,
  deactivateLogin,
  activateSignUp,
  deactivateSignUp,
} from "../../store/Modals";
import "./Splash.css";
function Splash() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const signup = () => {
    dispatch(deactivateLogin());
    dispatch(activateSignUp());
  };
  return (
    <div className="splashShell">
      <SignUpModal email={email} setEmail={setEmail} />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button className="menuButton" onClick={signup}>
        Sign Up
      </button>
    </div>
  );
}
export default Splash;
