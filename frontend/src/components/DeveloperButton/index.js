import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DeveloperButton.css";
import { changeDeveloper } from "../../store/showMenu";
function DeveloperButton() {
  const dispatch = useDispatch();
  const devState = useSelector((state) => state.menu.developer);

  return (
    <div className="abtDropDownOuterShell">
      <i className="fas fa-caret-up abtUpCaret"></i>
      <div className="abtDropDownShell">
        <div className="dropDownBtn">Profile</div>
        <div className="dropDownBtn">Log Out</div>
      </div>
    </div>
  );
}

export default DeveloperButton;
