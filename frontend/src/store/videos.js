const GET_VIDEOS = "videos/get";

export const getAllVideos = (videos) => {
  return {
    type: GET_VIDEOS,
    payload: videos,
  };
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
