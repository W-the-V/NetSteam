import { fetch } from "./csrf.js";
const GET_REVIEWS = "reviews/get";

export const setReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews,
  };
};
export const getVideoComments = (videoId) => async (dispatch) => {
  let res = await fetch(`/api/reviews/video/${videoId}`);
  dispatch(setReviews(res.data.reviewObj));
  return res;
};

export const postComment = (
  recommend,
  score,
  commentText,
  userId,
  videoId
) => async (dispatch) => {
  const res = await fetch(`/api/reviews/video/${videoId}`, {
    method: "POST",
    body: JSON.stringify({ recommend, score, commentText, userId }),
  });
  dispatch(setReviews(res.data.reviewObj));
  return res;
};

const initialState = {};
const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = Object.assign({}, state, action.payload);
      return newState;
    default:
      return state;
  }
};
export default reviewReducer;
