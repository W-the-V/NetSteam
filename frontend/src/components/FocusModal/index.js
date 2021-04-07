import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  deactivateFocus,
  activateComment,
  deactivateComment,
} from "../../store/Modals";
import { deleteComment } from "../../store/reviews";

import CommentModal from "../CommentForm";
import "./FocusModal.css";

Modal.setAppElement(document.getElementById("root"));

const FocusModal = () => {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.modal.comment);
  const focusState = useSelector((state) => state.modal.focus.status);
  const focusId = useSelector((state) => state.modal.focus.id);
  let reviews = useSelector((state) => state.reviews);
  const userId = useSelector((state) => state.session.user.id);
  let videos = useSelector((state) => state.videos);
  let videoOne = videos[focusId];
  const [edit, setEdit] = useState(false);
  reviews = Object.values(reviews).filter(
    (review) => review.videoId === focusId
  );

  const getDate = (date) => {
    date = date.split("-");
    let day = date[2].split("");
    let time = date[2].slice(3, 8);
    time = time.split(":");
    if (time[0] > 12) {
      time[0] = time[0] - 12;
      time[1] += "pm";
    } else if (time[1] == 12) time[1] += "pm";
    else time[1] += "am";
    time = time.join(":");
    day = day[0] + day[1];
    date = `Posted on ${date[1]}/${day}/${date[0]} at ${time}`;
    return date;
  };
  let videoScore = () => {
    let returnScore = 0;
    let returnCount = 0;
    if (reviews) {
      reviews.forEach((review) => {
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
  const sortReviews = (reviews) => {
    return reviews.sort((a, b) => a.updatedAt < b.updatedAt);
  };
  let score = videoScore();
  const onclick = () => {
    dispatch(deactivateFocus());
  };
  const onclick2 = () => {
    if (edit) return;
    if (commentState) dispatch(deactivateComment());
    else dispatch(activateComment());
  };
  const onclick3 = (commentId) => {
    console.log(commentId);
    console.log(reviews);
    if (edit) return;
    document.getElementById(`${commentId}`)?.classList.add("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      ?.classList.remove("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      ?.classList.add("commentInnerShell");
    setEdit(true);
  };
  const onclick4 = async (editId, userId) => {
    const res = await dispatch(deleteComment(editId, userId));
    return res;
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
          </div>
          <div className="commentSectionBottom">
            <div className="commentBottomLeft">
              <div className="bottomLeftTitle">
                <div>Reviews (sorted by: Most Recent)</div>
                <button className="commentBtn" onClick={onclick2}>
                  Create Comment
                </button>
              </div>
              <div className="commentLeftShell">
                {commentState && <CommentModal />}
                {sortReviews(reviews).map((rev) => (
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
                        <div
                          className={
                            userId == rev?.userId
                              ? "commentBtnShell"
                              : "commentBtnShell hiddenComment"
                          }
                        >
                          <button
                            className="commentBtnS"
                            onClick={() => onclick3(rev.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="commentBtnS"
                            onClick={() => onclick4(rev.id, userId)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <CommentModal
                      hidden={true}
                      editId={rev.id}
                      prevRecommend={rev?.recommended}
                      prevCommentText={rev?.body}
                      prevScore={rev?.score}
                      edit={edit}
                      setEdit={setEdit}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default FocusModal;
