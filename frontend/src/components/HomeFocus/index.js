import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Carousel from "../Carousel";
import ReactPlayer from "react-player";
import { setFocusModal } from "../../store/Modals";
import "./HomeFocus.css";

function HomeFocus() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let videos = useSelector((state) => state.videos);
  const [focusId, setFocusId] = useState("1");
  let videoOne = videos[focusId];

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
    switch (Math.round(returnScore)) {
      case 0:
        returnScore = "Overwhelmingly Negative";
        break;
      case 1:
        returnScore = "Very Negative";
        break;
      case 2:
        returnScore = "Negative";
        break;
      case 3:
        returnScore = "Mostly Negative";
        break;
      case 4:
        returnScore = "Mixed";
        break;
      case 5:
        returnScore = "Mostly Positive";
        break;
      case 6:
        returnScore = "Positive";
        break;
      case 7:
        returnScore = "Very Positive";
        break;
      case 8:
        returnScore = "Overwhelmingly Positive";
        break;
      default:
        returnScore = "No Reviews Yet";
        break;
    }
    const returnObj = { score: returnScore, total: returnCount };
    return returnObj;
  };
  let score = videoScore();
  useEffect(() => {
    videoOne = videos[focusId];
    score = videoScore();
  }, [focusId]);
  const onClick2 = (id) => {
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
              width="100%"
              height="100%"
              url={videoOne?.embedURL}
            />
          </div>
          <div className="focusAboutShell">
            <img className="gameImg" src={videoOne?.imageURL}></img>
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
                <button className="genreButton">{videoOne?.Genre.type}</button>
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
