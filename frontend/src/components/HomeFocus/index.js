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
  useEffect(() => {
    videoOne = videos[focusId];
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
              width="94%"
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
                  Overwhelmingly Positive (70,448)
                </div>
                <div className="reviewData">{videoOne?.releaseDate}</div>
                <div className="reviewData">{videoOne?.developer}</div>
                <div className="reviewData">{videoOne?.publisher}</div>
                <button className="genreButton">Survival</button>
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
