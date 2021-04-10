import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { setFocusModal, deactivateFocus } from "../../store/Modals";
import { getVideoComments } from "../../store/reviews";
import "./SearchModal.css";

function SearchModal({
  searchTerm,
  setSearchTerm,
  onclickSearch,
  searchState,
  setSearchState,
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
  const videoState = useSelector((state) => state.home.videos);
  const focusState = useSelector((state) => state.modal.focus.status);
  const videos = Object.values(videoState);
  let [searchItems, setSearchItems] = useState([]);
  useEffect(() => {
    if (
      !document.querySelector(".searchBtnShell").classList.contains("active")
    ) {
      document.querySelector(".searchBtnShell").classList.add("active");
    }
    if (focusState) dispatch(deactivateFocus());
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
            <div className="resultsText">{`0 Results for "${searchTerm}"`}</div>
          )}
          <i class="fas fa-times searchCloseIco" onClick={onclick}></i>
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
