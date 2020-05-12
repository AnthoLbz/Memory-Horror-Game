import React from 'react'
import { Grid, Header, Segment, Portal } from 'semantic-ui-react'


class ModalAlmostCaught extends React.Component {
    state = { open: true }
    
    render() {
      const { open } = this.state

      return (
        <Grid columns={2}>
          <Grid.Column>
            <Portal  open={open}>
              <Segment
                style={{
                  left: '40%',
                  position: 'fixed',
                  top: '50%',
                  zIndex: 1000,
                }}
              >
                <Header>Lucky one... You win 2 attempts !</Header>
              </Segment>
            </Portal>
          </Grid.Column>
        </Grid>
      )
    }
}

export default ModalAlmostCaught