const LOGIN_MODAL_ACTIVE = "loginModal/active";
const LOGIN_MODAL_INACTIVE = "loginModal/inactive";
const SIGNUP_MODAL_ACTIVE = "signUpModal/active";
const SIGNUP_MODAL_INACTIVE = "signUpModal/inactive";

export const activateLogin = () => {
  return {
    type: LOGIN_MODAL_ACTIVE,
  };
};

export const deactivateLogin = () => {
  return {
    type: LOGIN_MODAL_INACTIVE,
  };
};

export const activateSignUp = () => {
  return {
    type: SIGNUP_MODAL_ACTIVE,
  };
};

export const deactivateSignUp = () => {
  return {
    type: SIGNUP_MODAL_INACTIVE,
  };
};

const initialState = { login: false, signup: false };
const modalReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN_MODAL_ACTIVE:
      newState = Object.assign({}, state, { login: true });
      return newState;
    case LOGIN_MODAL_INACTIVE:
      newState = Object.assign({}, state, { login: false });
      return newState;
    case SIGNUP_MODAL_ACTIVE:
      newState = Object.assign({}, state, { signup: true });
      return newState;
    case SIGNUP_MODAL_INACTIVE:
      newState = Object.assign({}, state, { signup: false });
      return newState;
    default:
      return state;
  }
};
export default modalReducer;
