import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./HomeFocus.css";

function HomeFocus() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  let src = "../images/header.jpg";
  return (
    <div className="homeFocusShell">
      <div className="focusTitleBox">
        <div className="focusTitle">Lofi</div>
        <button className="focusTitleButton">Comments</button>
      </div>
      <div className="focusInnerShell">
        <div className="videoOuterShell">
          <iframe
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
          <div className="aboutVideoText"></div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
        </div>
      </div>
    </div>
  );
}
export default HomeFocus;
