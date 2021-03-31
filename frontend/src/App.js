import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginModal from "./components/LoginModal";
import Splash from "./components/Splash";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <LoginModal />
      {isLoaded && (
        <Switch>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
