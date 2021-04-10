const DEVELOPER_CHANGE = "developer/change";
const PROFILE_CHANGE = "profile/change";

export const changeDeveloper = () => {
  return {
    type: DEVELOPER_CHANGE,
  };
};
export const changeProfile = () => {
  return {
    type: PROFILE_CHANGE,
  };
};

const initialState = {
  developer: false,
  profile: false,
};
const menuReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DEVELOPER_CHANGE:
      if (state.developer) {
        newState = Object.assign({}, state, { developer: false });
      } else newState = Object.assign({}, state, { developer: true });
      return newState;
    case DEVELOPER_CHANGE:
      if (state.profile) {
        newState = Object.assign({}, state, { profile: false });
      } else newState = Object.assign({}, state, { profile: true });
      return newState;
    default:
      return state;
  }
};
export default menuReducer;
