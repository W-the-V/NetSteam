import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  deactivateFocus,
  activateComment,
  deactivateComment,
} from "../../store/Modals";

import CommentModal from "../CommentForm";
import "./FocusModal.css";

Modal.setAppElement(document.getElementById("root"));

const FocusModal = () => {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.modal.comment);
  const focusState = useSelector((state) => state.modal.focus.status);
  const focusId = useSelector((state) => state.modal.focus.id);
  const reviews = useSelector((state) => state.reviews);
  let videos = useSelector((state) => state.videos);
  let videoOne = videos[focusId];
  const [edit, setEdit] = useState(false);
  const getDate = (date) => {
    date = date.split("-");
    let day = date[2].split("");
    day = day[0] + day[1];
    date = `Posted on ${date[1]}/${day}/${date[0]}`;
    return date;
  };
  let videoScore = () => {
    let returnScore = 0;
    let returnCount = 0;
    if (reviews) {
      Object.values(reviews).forEach((review) => {
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
  const onclick = () => {
    dispatch(deactivateFocus());
  };
  const onclick2 = () => {
    if (commentState) dispatch(deactivateComment());
    else dispatch(activateComment());
  };
  const onclick3 = (commentId) => {
    if (edit) return;
    document.getElementById(`${commentId}`).classList.add("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      .classList.remove("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      .classList.add("commentInnerShell");
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
            <div className="focusAboutShell" id="focusModalAboutShell">
              <img className="gameImg" src={videoOne?.imageURL}></img>
              <div className="aboutVideoText" id="focusModalAboutText">
                {videoOne?.about}
              </div>
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
                  <button className="genreButton">
                    {videoOne?.Genre.type}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="commentSectionShell">
          <div className="commentSectionTop">
            <div className="commentTopLeft">
              <div className="topText">Overall Reviews: </div>
              <div className="bottomText">
                {score?.score}
                {score?.score !== "No Reviews Yet" ? (
                  <div className="totalReviewText">
                    ({score?.total} Reviews)
                  </div>
                ) : null}
              </div>
            </div>
            <div className="commentTopRight">
              <div className="topText">Recent Reviews: </div>
              <div className="bottomText">Very Positive (34,117 reviews)</div>
            </div>
          </div>
          <div className="commentSectionBottom">
            <div className="commentBottomLeft">
              <div className="bottomLeftTitle">
                <div>Comments (sorted by: rating)</div>
                <button className="commentBtn" onClick={onclick2}>
                  Create Comment
                </button>
              </div>
              <div className="commentLeftShell">
                {commentState && <CommentModal />}
                {Object.values(reviews).map((rev) => (
                  <div className="commentOuterShell">
                    <div className="commentInnerShell" id={rev.id}>
                      <div className="commentInnerLeft">
                        <div className="userProfileImg"></div>
                        <div className="commentUserInfo">
                          <div className="commentUserName">
                            {rev?.User?.username}
                          </div>
                          <div className="userTotal">1 comment</div>
                        </div>
                      </div>
                      <div className="commentInnerRight">
                        <div className="commentInnerRightTitle">
                          {rev?.recommended ? (
                            <div className="ratingImageUp">
                              <i className="fas fa-thumbs-up"></i>
                            </div>
                          ) : (
                            <div className="ratingImageDown">
                              <i className="fas fa-thumbs-down"></i>
                            </div>
                          )}
                          <div className="commentTitleText">
                            <div className="ratingText">
                              {rev?.recommended
                                ? "Recommended"
                                : "Not Recommended"}
                            </div>
                            <div className="commentDate">
                              {getDate(rev?.updatedAt)}
                            </div>
                          </div>
                        </div>
                        <div className="commentLowerRightShell">
                          <div className="commentText">{rev?.body}</div>
                        </div>
                        <div className="commentBtnShell">
                          <button
                            className="commentBtnS"
                            onClick={() => onclick3(rev.id)}
                          >
                            Edit
                          </button>
                          <button className="commentBtnS">Delete</button>
                        </div>
                      </div>
                    </div>
                    <CommentModal
                      hidden={true}
                      editId={rev.id}
                      prevRecommend={rev?.recommended}
                      prevCommentText={rev?.body}
                      prevScore={rev?.score}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="commentBottomRight">
              <div className="bottomRightTitle">Recently Posted</div>
              <div className="commentRightShell">
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
                        origins of the world she Horizon Zero Dawn is a third
                        person/single player action game set in post-apocalyptic
                        land ruled by mechanical creatures, in which the remains
                        of humanity are split into warring tribes and kingdoms
                        that dwell among the ruins of ancient times. And so here
                        we are, in a regressed to a primitive state Earth, where
                        we take on a role of a young huntress, an outcast of the
                        Nora tribe, Aloy, who's forced by a series of events to
                        go on a journey to not only uncover her past but also
                        the origins of the world she
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default FocusModal;
