import React, { useState } from "react";
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

const FocusModal = ({
  searchTerm,
  setSearchTerm,
  searchState,
  setSearchState,
}) => {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.modal.comment);
  const focusState = useSelector((state) => state.modal.focus.status);
  const focusId = useSelector((state) => state.modal.focus.id);
  let reviews = useSelector((state) => state.reviews);
  const userId = useSelector((state) => state.session.user.id);
  const pictures = useSelector((state) => state.profile.pictures);
  let videos = useSelector((state) => state.home.videos);
  let videoOne = videos[focusId];
  let reviewOne = useSelector((state) => state.reviews);
  const [recommend, setRecommend] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [score, setScore] = useState(1);
  const [edit, setEdit] = useState(false);
  reviews = Object.values(reviews)
    .filter((review) => review.videoId === focusId)
    .sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));

  const genreClick = (genre) => {
    setEdit(false);
    dispatch(deactivateFocus());
    setSearchTerm(genre);
    setSearchState(true);
  };
  //dayjs npm package
  const getDate = (date) => {
    date = date.split("-");
    let day = date[2].split("");
    let time = date[2].slice(3, 8);
    time = time.split(":");
    if (time[0] > 12) {
      time[0] = time[0] - 12;
      time[1] += "pm";
    } else if (time[1] === 12) time[1] += "pm";
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
  let totalScore = videoScore();
  const onclick = () => {
    setEdit(false);
    dispatch(deactivateFocus());
  };
  const onclick2 = () => {
    if (edit) return;
    if (commentState) dispatch(deactivateComment());
    else {
      setRecommend(true);
      setCommentText();
      setScore(1);
      dispatch(activateComment());
    }
  };
  const onclick3 = (commentId) => {
    if (edit) return;
    document.getElementById(`${commentId}`)?.classList.add("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      ?.classList.remove("hiddenComment");
    document
      .getElementById(`edit${commentId}`)
      ?.classList.add("commentInnerShell");
    setRecommend(reviewOne[commentId].recommended);
    setCommentText(reviewOne[commentId].body);
    setScore(reviewOne[commentId].score);
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
        shouldReturnFocusAfterClose={false}
      >
        <div className="homeFocusShell">
          <div className="focusTitleBox">
            <div className="focusTitle">{videoOne?.title}</div>
            <i class="fas fa-times focusCloseIco" onClick={onclick}></i>
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
              <img
                className="gameImg"
                alt={`${videoOne?.title}`}
                src={videoOne?.imageURL}
              ></img>
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
                    {totalScore?.score}
                    {totalScore?.score !== "No Reviews Yet" ? (
                      <div className="totalReviewText">
                        ({totalScore?.total} Reviews)
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
                {totalScore?.score}
                {totalScore?.score !== "No Reviews Yet" ? (
                  <div className="totalReviewText">
                    ({totalScore?.total} Reviews)
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
                {commentState && (
                  <CommentModal
                    recommend={recommend}
                    setRecommend={setRecommend}
                    commentText={commentText}
                    setCommentText={setCommentText}
                    score={score}
                    setScore={setScore}
                  />
                )}
                {reviews.map((rev) => (
                  <div className="commentOuterShell">
                    <div className="commentInnerShell" id={rev.id}>
                      <div className="commentInnerLeft">
                        <img
                          alt="profilePicture"
                          src={pictures[rev.User.profilePictureId].imageLink}
                          className="userProfileImg"
                        ></img>
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
                            userId === rev?.userId
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
                      recommend={recommend}
                      setRecommend={setRecommend}
                      commentText={commentText}
                      setCommentText={setCommentText}
                      score={score}
                      setScore={setScore}
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
