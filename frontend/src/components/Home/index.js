import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Home.css";
import HomeFocus from "../HomeFocus";
import Carousel from "../Carousel";

function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="homeOuterShell">
      <HomeFocus />
      <Carousel />
      <Carousel />
    </div>
  );
}
export default Home;
