const DEVELOPER_CHANGE = "developer/change";

export const changeDeveloper = () => {
  return {
    type: DEVELOPER_CHANGE,
  };
};

const initialState = {
  developer: false,
};
const menuReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DEVELOPER_CHANGE:
      if (state.developer) {
        newState = Object.assign({}, state, { developer: false });
      } else newState = Object.assign({}, state, { developer: true });
      return newState;
    default:
      return state;
  }
};
export default menuReducer;
