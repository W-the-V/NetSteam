import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  activateSignUp,
  deactivateLogin,
  deactivateSignUp,
} from "../../store/Modals";
import { getAllVideos } from "../../store/videos";
import * as sessionActions from "../../store/session";

Modal.setAppElement(document.getElementById("root"));

const LoginModal = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.modal.login);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    let res = await dispatch(
      sessionActions.login({ credential, password })
    ).catch(async (res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
    if (res) {
      dispatch(deactivateLogin());
      dispatch(deactivateSignUp());
    }

    return res;
  };
  const demoLogin = async () => {
    let res = await dispatch(
      sessionActions.login({
        credential: "demo@demo.com",
        password: "password",
      })
    );
    dispatch(deactivateSignUp());
    dispatch(deactivateLogin());
  };

  const onclick = () => {
    dispatch(deactivateLogin());
  };
  const changeForm = () => {
    dispatch(deactivateLogin());
    dispatch(activateSignUp());
  };

  return (
    <>
      <Modal
        isOpen={loginState}
        onRequestClose={onclick}
        contentLabel="Login"
        className="defaultInner"
        overlayClassName="defaultOuter"
      >
        <div className="LoginShell">
          <div className="formTitle">
            <h1>Login</h1>
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
              <label>Username or Email</label>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                className="formInput"
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
            <button className="modalButton" type="submit">
              Login
            </button>
            <div className="modalFooter">
              <p className="modalFooterText" onClick={changeForm}>
                Don't have an account yet? Sign Up
              </p>
              <p className="modalFooterText" onClick={demoLogin}>
                Login as Demo User
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
