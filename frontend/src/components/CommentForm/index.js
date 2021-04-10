import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deactivateComment } from "../../store/Modals";
import { postComment, editComment } from "../../store/reviews";
import "./CommentForm.css";

const CommentModal = ({
  hidden,
  editId,
  edit,
  setEdit,
  recommend,
  setRecommend,
  commentText,
  setCommentText,
  score,
  setScore,
}) => {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.modal.comment);
  const userId = useSelector((state) => state.session.user.id);
  const focusId = useSelector((state) => state.modal.focus.id);
  let videos = useSelector((state) => state.home.videos);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await dispatch(
        editComment(recommend, score, commentText, editId, userId)
      );
      document.getElementById(`edit${editId}`).classList.add("hiddenComment");
      document
        .getElementById(`edit${editId}`)
        .classList.remove("commentInnerShell");
      document.getElementById(`${editId}`).classList.remove("hiddenComment");
      return setEdit(false);
    } else {
      const res = await dispatch(
        postComment(recommend, score, commentText, userId, focusId)
      );
      dispatch(deactivateComment());
    }
  };
  const onclickUp = () => {
    setRecommend(true);
    setScore(1);
    document.querySelector(".addUp").classList = "ratingImageUp addUp active";
    document.querySelector(".addDown").classList = "ratingImageDown addDown";
  };
  const onclickDown = () => {
    setRecommend(false);
    setScore(0);
    document.querySelector(".addUp").classList = "ratingImageUp addUp";
    document.querySelector(".addDown").classList =
      "ratingImageDown addDown active";
  };
  return (
    <div
      className={
        hidden ? "commentOuterShell hiddenComment" : "commentOuterShell"
      }
      id={`edit${editId}`}
    >
      <form className="commentForm" onSubmit={handleSubmit}>
        <div className="recommendShell">
          <div className="ratingText">Would you recommend this Trailer?</div>
          <div
            className={
              recommend ? "ratingImageUp addUp active" : "ratingImageUp addUp"
            }
            onClick={onclickUp}
          >
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div
            className={
              !recommend
                ? "ratingImageDown addDown active"
                : "ratingImageDown addDown"
            }
            onClick={onclickDown}
          >
            <i className="fas fa-thumbs-down"></i>
          </div>
        </div>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="commentTextEntry"
          required={true}
        />
        <button type="submit" className="commentSubmit">
          Post
        </button>
      </form>
    </div>
  );
};
export default CommentModal;
