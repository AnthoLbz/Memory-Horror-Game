import React from "react";
import "./App.css";
import Button from "./components/Buttons";
import "./components/button.css";

export default function App() {
  return (
    <>
    <div className="Button hvr-sweep-to-top">
      <Button
        onClick={() => {
          console.log("You clicked!");
        }}
        type="button"
        buttonSize="btn--large"
        buttonStyle="btn--easy--solid"
      >
        easy
      </Button>
    </div>
    <div className="Button">
      <Button
        onClick={() => {
          console.log("You clicked!");
        }}
        type="button"
        buttonSize="btn--large"
        buttonStyle="btn--medium--solid"
      >
        medium
      </Button>
    </div>
    <div className="Button">
      <Button
        onClick={() => {
          console.log("You clicked!");
        }}
        type="button"
        buttonSize="btn--large"
        buttonStyle="btn--hard--solid"
      >
        hard
      </Button>
    </div>
    </>
  );
}
