import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Home.css";
import HomeFocus from "../HomeFocus";
import Carousel from "../Carousel";
import FocusModal from "../FocusModal";
import { getAllVideos } from "../../store/videos";

function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [focusId, setFocusId] = useState("1");
  let videos = useSelector((state) => state.videos);
  useEffect(() => {
    dispatch(getAllVideos());
  }, []);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="homeOuterShell">
      <FocusModal />
      <HomeFocus />
      <Carousel
        title={"New"}
        videos={videos}
        focusId={focusId}
        setFocusId={setFocusId}
        videos={videos}
      />
      <Carousel />
    </div>
  );
}
export default Home;
