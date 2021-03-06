import { fetch } from "./csrf.js";
const GET_REVIEWS = "reviews/get";
const REMOVE_REVIEW = "reviews/remove";
const ADD_REVIEW = "reviews/add";

export const setReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews,
  };
};
export const deleteReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    payload: reviewId,
  };
};
export const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review,
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
  return res.data.review;
};

export const editComment = (
  recommend,
  score,
  commentText,
  editId,
  userId
) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${editId}`, {
    method: "POST",
    body: JSON.stringify({ recommend, score, commentText, userId }),
  });
  dispatch(setReviews(res.data.reviewObj));
  return res;
};

export const deleteComment = (editId, userId) => async (dispatch) => {
  const res = await fetch(`api/reviews/${editId}`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
  dispatch(deleteReview(res.data.reviewId));
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
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    case ADD_REVIEW:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};
export default reviewReducer;
