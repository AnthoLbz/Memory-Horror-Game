import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'semantic-ui-react'
import './modalFinishGame.css'

const ModalFinishGame = ({ count, resetGame }) => (
  <Modal className="bgFinish" open="true" basic size="small">
    <Modal.Content>
      <div className="Finish">
        <h1>You escaped !!!</h1>
        <h3>You clicked {count} times</h3>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <div className="altFinish">
        <Link to="/">
          <button className="homeFinish">Home</button>
        </Link>
        <Link to="/Game">
          <button className="resetGame" onClick={resetGame}>
            ► Play Again
          </button>
        </Link>
      </div>
    </Modal.Actions>
  </Modal>
);

  export default ModalFinishGame