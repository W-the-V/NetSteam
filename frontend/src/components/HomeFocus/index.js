import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Carousel from "../Carousel";
import ReactPlayer from "react-player";
import { setFocusModal } from "../../store/Modals";
import { getVideoComments } from "../../store/reviews";
import "./HomeFocus.css";

function HomeFocus({ searchTerm, setSearchTerm, searchState, setSearchState }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let videos = useSelector((state) => state.home.videos);
  videos = Object.values(videos).filter((video) => video.Reviews.length >= 10);
  const [focusId, setFocusId] = useState(0);
  let videoOne = videos[focusId];

  const genreClick = (genre) => {
    setSearchTerm(genre);
    setSearchState(true);
  };
  let videoScore = () => {
    let returnScore = 0;
    let returnCount = 0;
    if (videoOne?.Reviews) {
      videoOne.Reviews.forEach((review) => {
        returnScore += review.score;
        returnCount++;
      });
    }
    returnScore = returnScore / returnCount;
    if (returnScore < 0.1) returnScore = "Overwhelmingly Negative";
    else if (returnScore < 0.2) returnScore = "Very Negative";
    else if (returnScore < 0.3) returnScore = "Negative";
    else if (returnScore < 0.4) returnScore = "Mostly Negative";
    else if (returnScore < 0.5) returnScore = "Mixed";
    else if (returnScore < 0.6) returnScore = "Mostly Positive";
    else if (returnScore < 0.7) returnScore = "Positive";
    else if (returnScore < 0.8) returnScore = "Very Positive";
    else if (returnScore >= 0.8) returnScore = "Overwhelmingly Positive";
    else returnScore = "No Reviews Yet";
    const returnObj = { score: returnScore, total: returnCount };
    return returnObj;
  };
  let score = videoScore();
  // useEffect(() => {
  //   videoOne = videos[focusId];
  //   score = videoScore();
  // }, [focusId]);
  const onClick2 = (id) => {
    dispatch(getVideoComments(id));
    dispatch(setFocusModal(id));
  };
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="homeFocusShell">
        <div className="focusTitleBox">
          <div className="focusTitle">{videoOne?.title}</div>
        </div>
        <div className="focusInnerShell">
          <div className="videoOuterShell">
            <ReactPlayer
              className="focusVideo"
              controls={true}
              volume={0.5}
              pip={false}
              width="94%"
              height="100%"
              url={videoOne?.embedURL}
            />
          </div>
          <div className="focusAboutShell">
            <img
              className="gameImg"
              src={videoOne?.imageURL}
              alt={"focus"}
            ></img>
            <div className="aboutVideoText">{videoOne?.about}</div>
            <div className="reviewOuterShell">
              <div className="reviewTitleBox">
                <div className="reviewTitles">All Reviews:</div>
                <div className="reviewTitles">Release Date:</div>
                <div className="reviewTitles">Developer:</div>
                <div className="reviewTitles">Publisher:</div>
                <div className="reviewTitles reviewGenre">Genre:</div>
              </div>
              <div className="reviewDataBox">
                <div className="reviewData">
                  {score?.score}
                  {score?.score !== "No Reviews Yet" ? (
                    <div className="totalReviewText">
                      ({score?.total} Reviews)
                    </div>
                  ) : null}
                </div>
                <div className="reviewData">{videoOne?.releaseDate}</div>
                <div className="reviewData">{videoOne?.developer}</div>
                <div className="reviewData">{videoOne?.publisher}</div>
                <button
                  className="genreButton"
                  onClick={() => genreClick(videoOne.Genre.type)}
                >
                  {videoOne?.Genre.type}
                </button>
                <div className="focusButtonShell">
                  <div
                    className="modalFooterText"
                    onClick={() => onClick2(videoOne.id)}
                  >
                    Show more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        title={"Trending"}
        focusId={focusId}
        setFocusId={setFocusId}
        videos={videos}
      />
    </>
  );
}
export default HomeFocus;
