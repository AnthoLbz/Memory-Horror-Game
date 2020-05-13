import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Game from "./components/Game";
import VideoPlayer from './components/VideoPlayer';
import Contact from "./components/Contact";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Game" component={Game} />
        <Route exact path="/Videos" component={VideoPlayer} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  );
};

export default Router;
