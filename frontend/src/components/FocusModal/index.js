import React, { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { deactivateFocus } from "../../store/Modals";
import "./FocusModal.css";

Modal.setAppElement(document.getElementById("root"));

const FocusModal = () => {
  const dispatch = useDispatch();
  const focusState = useSelector((state) => state.modal.focus.status);
  const focusId = useSelector((state) => state.modal.focus.id);
  let videos = useSelector((state) => state.videos);
  let videoOne = videos[focusId];
  const onclick = () => {
    dispatch(deactivateFocus());
  };
  return (
    <>
      <Modal
        isOpen={focusState}
        onRequestClose={onclick}
        contentLabel="Focus"
        className="focusInner"
        overlayClassName="focusOuter"
      >
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="commentSectionShell">
          <div className="commentSectionTop">
            <div className="commentTopLeft">
              <div className="topText">Overall Reviews: </div>
              <div className="bottomText">Mostly Positive (34,117 reviews)</div>
            </div>
            <div className="commentTopRight">
              <div className="topText">Recent Reviews: </div>
              <div className="bottomText">Very Positive (34,117 reviews)</div>
            </div>
          </div>
          <div className="commentSectionBottom">
            <div className="commentBottomLeft">
              <div className="bottomLeftTitle">
                Comments (sorted by: rating)
              </div>
              <div className="commentLeftShell">
                <div className="commentOuterShell">
                  <div className="commentInnerLeft">
                    <div className="userProfileImg"></div>
                    <div className="commentUserInfo">
                      <div className="commentUserName">PecMajor</div>
                      <div className="userTotal">1 comment</div>
                    </div>
                  </div>
                  <div className="commentInnerRight">
                    <div className="commentInnerRightTitle">
                      <div className="ratingImage"></div>
                      <div className="commentTitleText">
                        <div className="ratingText">Recommended</div>
                        <div className="commentDate">Posted: March 11</div>
                      </div>
                    </div>
                    <div className="commentLowerRightShell">
                      <div className="commentText">
                        Horizon Zero Dawn is a third person/single player action
                        game set in post-apocalyptic land ruled by mechanical
                        creatures, in which the remains of humanity are split
                        into warring tribes and kingdoms that dwell among the
                        ruins of ancient times. And so here we are, in a
                        regressed to a primitive state Earth, where we take on a
                        role of a young huntress, an outcast of the Nora tribe,
                        Aloy, who's forced by a series of events to go on a
                        journey to not only uncover her past but also the
                        origins of the world she
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="commentBottomRight">
              <div className="bottomRightTitle">Recently Posted</div>
              <div className="commentRightShell"></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default FocusModal;
