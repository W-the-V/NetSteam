import { fetch } from "./csrf.js";
const GET_PICTURES = "pictures/get";
const EDIT_PROFILE = "profile/edit";

export const setPictures = (pictures) => {
  return {
    type: GET_PICTURES,
    payload: pictures,
  };
};

// export const editProfile = (review) => {
//   console.log(review);
//   return {
//     type: EDIT_PROFILE,
//     payload: review,
//   };
// };
export const getPictures = () => async (dispatch) => {
  let res = await fetch(`/api/users/profile`);
  dispatch(setPictures(res.data.pictures));
  return res;
};

// export const editComment = (
//   recommend,
//   score,
//   commentText,
//   editId,
//   userId
// ) => async (dispatch) => {
//   const res = await fetch(`/api/reviews/${editId}`, {
//     method: "POST",
//     body: JSON.stringify({ recommend, score, commentText, userId }),
//   });
//   dispatch(setReviews(res.data.reviewObj));
//   return res;
// };

const initialState = { pictures: {} };
const profileReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PICTURES:
      newState = Object.assign({}, state, { pictures: action.payload });
      return newState;
    default:
      return state;
  }
};
export default profileReducer;
