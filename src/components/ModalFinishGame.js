import React from 'react'
//import { Link } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'
import './modalFinishGame.css'


const ModalFinishGame = ({count}) => (
    <Modal open= 'true' basic size='small'>
      <Modal.Content >
        <h1>You escaped !!!</h1>
        <h3>You clicked {count} times</h3>
      </Modal.Content>
      <Modal.Actions>
          <Button basic color='red' inverted>
            Home
          </Button>
        <Button color='green' inverted>
          Play again
        </Button>
      </Modal.Actions>
    </Modal>
  )

  export default ModalFinishGame