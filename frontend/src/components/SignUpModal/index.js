import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import {
  deactivateSignUp,
  deactivateLogin,
  activateLogin,
} from "../../store/Modals";
import { getAllVideos } from "../../store/videos";
import * as sessionActions from "../../store/session";

Modal.setAppElement(document.getElementById("root"));

function SignUpModal({ email, setEmail }) {
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.modal.signup);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const onclick = () => {
    dispatch(deactivateSignUp());
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
    dispatch(getAllVideos(res.data.videoObj));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (password === confirmPassword) {
      setErrors([]);
      res = await dispatch(
        sessionActions.signup({
          email,
          username,
          password,
        })
      ).catch((res) => {
        if (res.data && res.data.errors) {
          if (res.data.errors == "email must be unique") {
            setErrors(["Email already exists"]);
          } else setErrors(res.data.errors);
        }
      });
    } else setErrors(["Passwords must match"]);
    if (res) {
      dispatch(deactivateLogin());
      dispatch(deactivateSignUp());
      dispatch(getAllVideos(res.data.videoObj));
    }

    return res;
  };
  const changeForm = () => {
    dispatch(deactivateSignUp());
    dispatch(activateLogin());
  };

  return (
    <>
      <div className="SignUpForm">
        <Modal
          isOpen={signUpState}
          onRequestClose={onclick}
          contentLabel="Signup"
          className="defaultInner"
          overlayClassName="defaultOuter"
        >
          <div className="LoginShell">
            <div className="formTitle">
              <h1>Sign Up</h1>
            </div>
            <form className="LoginForm" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <p className="modalErrors" key={idx}>
                    {error}
                  </p>
                ))}
              </ul>
              <div className="inputBox">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  className="formInput"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="inputBox">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  className="formInput"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="inputBox">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="formInput"
                />
              </div>
              <div className="inputBox">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="formInput"
                />
              </div>
              <button className="modalButton" type="submit">
                Sign Up
              </button>
              <div className="modalFooter">
                <p className="modalFooterText" onClick={changeForm}>
                  Already have an account? Login
                </p>
                <p className="modalFooterText" onClick={demoLogin}>
                  Login as Demo User
                </p>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default SignUpModal;
