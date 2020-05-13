import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button} from "semantic-ui-react";
import "./modalGameOver.css";
import usePortal from "react-cool-portal";


function ModalGameOver(resetGame) {
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
    onShow: () => {
      setAnimationState("slideIn");
    },
  });
  const [showModal, setShowModal] = useState(false);
  const [animationState, setAnimationState] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
          show();
        }}
      >
        Open Modal
      </button>
      {showModal && (
        <Portal>
          <div className="modal" tabIndex={-1}>
            <div
              className={`modal-dialog ${animationState}`}
              role="dialog"
              aria-labelledby="modal-label"
              aria-modal="true"
              onAnimationEnd={() => {
                if (animationState === "slideOut") {
                  hide();
                }
                setAnimationState("");
              }}
            >
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
          </div>
        </Portal>
      )}
    </div>
  );
}
  
export default ModalGameOver;
