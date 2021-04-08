import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import {
  deactivateSignUp,
  deactivateLogin,
  activateLogin,
} from "../../store/Modals";
import { getAllVideos } from "../../store/videos";
import { setFocusModal } from "../../store/Modals";
import { getVideoComments } from "../../store/reviews";
import * as sessionActions from "../../store/session";
import "./SearchModal.css";

function SearchModal({
  searchTerm,
  setSearchTerm,
  searchState,
  setSearchState,
  onclickSearch,
}) {
  const dispatch = useDispatch();
  const onclick = () => {
    setSearchTerm("");
    onclickSearch();
  };
  const onClick2 = (id) => {
    dispatch(setFocusModal(id));
    dispatch(getVideoComments(id));
  };
  const videoState = useSelector((state) => state.videos);
  const videos = Object.values(videoState);
  let [searchItems, setSearchItems] = useState([]);
  useEffect(() => {
    let result = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.Genre.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchItems(result);
  }, [searchTerm]);
  return (
    <Modal
      isOpen={searchTerm}
      onRequestClose={onclick}
      contentLabel="Signup"
      className="searchInner"
      overlayClassName="searchOuter"
      shouldFocusAfterRender={false}
    >
      <div className="searchOuterShell">
        <div className="searchTopShell">
          {searchItems?.length ? (
            <div className="resultsText">
              {`${searchItems.length} results found for "${searchTerm}"`}
            </div>
          ) : (
            <div className="resultsText">0 Results</div>
          )}
          <i class="fas fa-times searchCloseIco" onClick={onclick}></i>
        </div>
        <div className="genreShell">
          Filter by Genre: <button className="genreButton">BUTTON</button>
        </div>
        <div className="resultsShell">
          {searchItems?.map((item) => (
            <img
              className="slide"
              src={item?.imageURL}
              onClick={() => onClick2(item?.id)}
            ></img>
          ))}
        </div>
      </div>
    </Modal>
  );
}
export default SearchModal;
