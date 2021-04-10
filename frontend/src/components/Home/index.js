import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Home.css";
import HomeFocus from "../HomeFocus";
import Carousel from "../Carousel";
import FocusModal from "../FocusModal";
import Profile from "../Profile";
import { getAllVideos } from "../../store/videos";
import { getPictures } from "../../store/profile";

function Home({ searchTerm, setSearchTerm, searchState, setSearchState }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [focusId, setFocusId] = useState("1");
  let videos = useSelector((state) => state.home.videos);
  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getPictures());
  }, []);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="homeOuterShell">
      <Profile />
      <FocusModal
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchState={searchState}
        setSearchState={setSearchState}
      />
      <HomeFocus
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchState={searchState}
        setSearchState={setSearchState}
      />
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
