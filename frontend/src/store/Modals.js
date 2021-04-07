const LOGIN_MODAL_ACTIVE = "loginModal/active";
const LOGIN_MODAL_INACTIVE = "loginModal/inactive";
const SIGNUP_MODAL_ACTIVE = "signUpModal/active";
const SIGNUP_MODAL_INACTIVE = "signUpModal/inactive";
const SET_FOCUS_MODAL = "focus/set";
const DEACTIVATE_FOCUS_MODAL = "focus/deactivate";
const ACTIVATE_COMMENT_MODAL = "comment/activate";
const DEACTIVATE_COMMENT_MODAL = "comment/deactivate";

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

export const setFocusModal = (id) => {
  return {
    type: SET_FOCUS_MODAL,
    id: id,
  };
};
export const deactivateFocus = () => {
  return {
    type: DEACTIVATE_FOCUS_MODAL,
  };
};
export const activateComment = () => {
  return {
    type: ACTIVATE_COMMENT_MODAL,
  };
};

export const deactivateComment = () => {
  return {
    type: DEACTIVATE_COMMENT_MODAL,
  };
};
const initialState = {
  login: false,
  signup: false,
  focus: { status: false, id: 0 },
  comment: false,
};
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
    case SET_FOCUS_MODAL:
      newState = Object.assign({}, state, {
        focus: { status: true, id: action.id },
      });
      return newState;
    case DEACTIVATE_FOCUS_MODAL:
      newState = Object.assign({}, state, {
        focus: { status: false, id: 0 },
      });
      return newState;
    case DEACTIVATE_COMMENT_MODAL:
      newState = Object.assign({}, state, { comment: false });
      return newState;
    case ACTIVATE_COMMENT_MODAL:
      newState = Object.assign({}, state, { comment: true });
      return newState;
    default:
      return state;
  }
};
export default modalReducer;
