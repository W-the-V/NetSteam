import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomeFocus.css";

function HomeFocus() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  let videoOne = useSelector((state) => state.videos[1]);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="homeFocusShell">
      <div className="focusTitleBox">
        <div className="focusTitle">{videoOne?.title}</div>
      </div>
      <div className="focusInnerShell">
        <div className="videoOuterShell">
          <iframe
            className="focusVideo"
            width="100%"
            height="100%"
            src={videoOne?.embedURL}
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope;"
            allowFullScreen="allowfullscreen"
          ></iframe>
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
              <div className="reviewData">Overwhelmingly Positive (70,448)</div>
              <div className="reviewData">Feb 2, 2021</div>
              <div className="reviewData">{videoOne?.developer}</div>
              <div className="reviewData">{videoOne?.publisher}</div>
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
