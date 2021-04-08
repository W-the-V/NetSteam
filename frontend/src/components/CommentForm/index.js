import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deactivateComment } from "../../store/Modals";
import { postComment, editComment } from "../../store/reviews";
import "./CommentForm.css";

const CommentModal = ({ hidden, editId, edit, setEdit }) => {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.modal.comment);
  const userId = useSelector((state) => state.session.user.id);
  const focusId = useSelector((state) => state.modal.focus.id);
  let videos = useSelector((state) => state.videos);
  let reviewOne = useSelector((state) => state.reviews);
  const [recommend, setRecommend] = useState(
    reviewOne[editId]?.recommended.toString()
      ? reviewOne[editId]?.recommended
      : true
  );
  const [commentText, setCommentText] = useState(reviewOne[editId]?.body);
  const [score, setScore] = useState(reviewOne[editId]?.score);
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
        postComment(recommend, score, commentText, focusId, userId)
      );
      // console.log(res);
      // console.log(await reviewOne);
      // setRecommend(reviewOne[res].recommend);
      // reviewOne.forceUpdate();
      dispatch(deactivateComment());
    }
  };
  const onclickUp = () => {
    setRecommend(true);
    document.querySelector(".addUp").classList = "ratingImageUp addUp active";
    document.querySelector(".addDown").classList = "ratingImageDown addDown";
  };
  const onclickDown = () => {
    setRecommend(false);
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
        <div className="scaleShell">
          <div className="scaleText">How would you Rate this Trailer?</div>
          <input
            type="radio"
            value={0}
            name="rating"
            className="ratingRad"
            checked={score == 0}
            onChange={(e) => setScore(e.target.value)}
            required={true}
          />
          0
          <input
            type="radio"
            value={1}
            checked={score == 1}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          1
          <input
            type="radio"
            value={2}
            checked={score == 2}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          2
          <input
            type="radio"
            value={3}
            checked={score == 3}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          3
          <input
            type="radio"
            value={4}
            checked={score == 4}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          4
          <input
            type="radio"
            value={5}
            checked={score == 5}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          5
          <input
            type="radio"
            value={6}
            checked={score == 6}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          6
          <input
            type="radio"
            value={7}
            checked={score == 7}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          7
          <input
            type="radio"
            value={8}
            checked={score == 8}
            name="rating"
            className="ratingRad"
            onChange={(e) => setScore(e.target.value)}
          />
          8
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
