import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'
import './modalFinishGame.css'

const ModalFinishGame = ({count,resetGame}) => (
    <Modal open='true' basic size='small'>
      <Modal.Content >
        <h1>You escaped !!!</h1>
        <h3>You clicked {count} times</h3>
      </Modal.Content>
      <Modal.Actions>
        <Link to="/">
          <Button className="home">
            Home
          </Button>
        </Link>
        <Link to="/Game">
          <Button className="reset" onClick={resetGame}>
            ► Play Again
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  )

  export default ModalFinishGame