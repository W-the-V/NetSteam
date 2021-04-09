import "./DeveloperButton.css";
function DeveloperButton() {
  const devHover = () => {
    document
      .querySelector(".abtDropDownOuterShell")
      .classList.add("hiddenComment");
    document.querySelector(".navButton").classList.remove("active");
  };

  return (
    <div
      className="abtDropDownOuterShell hiddenComment"
      onMouseLeave={() => devHover()}
    >
      <i className="fas fa-caret-up abtUpCaret"></i>
      <div className="abtDropDownShell">
        <div className="dropDownBtn">
          <a
            className="aboutLink"
            target="_blank"
            href="https://github.com/W-the-V/NetSteam"
          >
            GitHub
          </a>
        </div>
        <div className="dropDownBtn">
          <a
            className="aboutLink"
            target="_blank"
            href="https://www.linkedin.com/in/walter-hills-a52535205/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeveloperButton;
