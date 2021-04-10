const GET_VIDEOS = "home/videos";
const GET_GENRES = "home/genres";

export const setVideos = (videos) => {
  return {
    type: GET_VIDEOS,
    payload: videos,
  };
};
export const setGenres = (genres) => {
  return {
    type: GET_GENRES,
    payload: genres,
  };
};

export const getAllVideos = () => async (dispatch) => {
  let res = await fetch("/api/home");
  res = await res.json();
  dispatch(setVideos(res.videoObj));
  dispatch(setGenres(res.genres));
  return res;
};

const initialState = { videos: {}, genres: [] };
const videosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_VIDEOS:
      newState = Object.assign({}, state, { videos: action.payload });
      return newState;
    case GET_GENRES:
      newState = Object.assign({}, state, { genres: action.payload });
      return newState;
    default:
      return state;
  }
};
export default videosReducer;
