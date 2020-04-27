import React from "react";
import "./App.css";
import "./components/landing.css";
import Router from "./Router";
import PlayList from "./components/PlayList";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/" className="title">Memory Horror Game</Link>
      <Router />
      <PlayList />
    </>
  );
}

export default App
