import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomeFocus.css";

function HomeFocus() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  let src = "https://netsteambucket.s3.amazonaws.com/header.jpg";
  return (
    <div className="homeFocusShell">
      <div className="focusTitleBox">
        <div className="focusTitle">Lofi</div>
      </div>
      <div className="focusInnerShell">
        <div className="videoOuterShell">
          <iframe
            className="focusVideo"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&modestbranding=1"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope;"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="focusAboutShell">
          <img className="gameImg" src={src}></img>
          <div className="aboutVideoText">
            A brutal exploration and survival game for 1-10 players, set in a
            procedurally-generated purgatory inspired by viking culture. Battle,
            build, and conquer your way to a saga worthy of Odin’s patronage!
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
              <div className="reviewData">Overwhelmingly Positive (70,448)</div>
              <div className="reviewData">Feb 2, 2021</div>
              <div className="reviewData">Iron Gate AB</div>
              <div className="reviewData">Coffee Stain Publishing</div>
              <button className="genreButton">Survival</button>
              <div className="focusButtonShell">
                <div className="modalFooterText">Show more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeFocus;
