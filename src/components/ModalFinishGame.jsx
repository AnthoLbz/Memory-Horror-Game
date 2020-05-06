import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalFinishGame = () => (
    <Modal open= 'true' basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          You win !!!
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )

  export default ModalFinishGame