import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Game from "./components/Game";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Game" component={Game} />
      </Switch>
    </>
  );
};

export default Router;
