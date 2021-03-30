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
      <div className="splashTitleShell">
        <p className="splashTitle">
          Video game trailers, information, discussion, and more.
        </p>
        <div className="splashInputShell">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="splashInput"
            placeholder="Email address"
          ></input>
          <button className="splashButton" onClick={signup}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Splash;
