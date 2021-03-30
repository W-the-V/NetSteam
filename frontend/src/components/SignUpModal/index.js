import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { deactivateSignUp } from "../../store/Modals";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          username,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
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
              <h1>Sign up</h1>
            </div>
            <form className="LoginForm" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
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
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default SignUpModal;
