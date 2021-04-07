const GET_VIDEOS = "videos/get";

export const setVideos = (videos) => {
  return {
    type: GET_VIDEOS,
    payload: videos,
  };
};
export const getAllVideos = () => async (dispatch) => {
  let res = await fetch("/api/home");
  res = await res.json();
  dispatch(setVideos(res.videoObj));
  return res;
};


const initialState = {};
const videosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_VIDEOS:
      newState = Object.assign({}, state, action.payload);
      return newState;
    default:
      return state;
  }
};
export default videosReducer;
