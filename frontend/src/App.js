import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginModal from "./components/LoginModal";
import Splash from "./components/Splash";
import Home from "./components/Home";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchState, setSearchState] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation
        isLoaded={isLoaded}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchState={searchState}
        setSearchState={setSearchState}
      />
      <LoginModal />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/home">
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchState={searchState}
              setSearchState={setSearchState}
            />
          </Route>
          <Route>
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
