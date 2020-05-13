import React from "react";
import { Link } from "react-router-dom";
import "./modalGameOver.css";
import usePortal from "react-cool-portal";

function ModalGameOver(resetGame) {
  const { Portal, show} = usePortal({
    defaultShow: false,
  });

  return (
    <div>
      {show()}
      <Portal>
        <div className="modal">
          <div className="modal-header">
            <h5 id="modal-label">The game is over for you ...</h5>
            <Link to="/">
              <button className="home">Home</button>
            </Link>
            <Link to="/Game">
              <button className="reset" onClick={resetGame}>
                Try Again ?
              </button>
            </Link>
          </div>
        </div>
      </Portal>
    </div>
  );
}

export default ModalGameOver;
