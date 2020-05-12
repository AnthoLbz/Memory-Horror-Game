import React from 'react'
import { Grid, Header, Segment, Portal } from 'semantic-ui-react'
import './modalAlmostCaught.css'


class ModalAlmostCaught extends React.Component {
    state = { open: true }
    
    render() {
      const { open } = this.state

      return (
        <Grid columns={2}>
          <Grid.Column>
            <Portal  open={open} >
              <Segment className='modalContainer'
                style={{
                    left: '35%',
                    right: '35%',
                    position: 'absolute',
                    top: '50%',
                    zIndex: 1000,
                    padding: '0px',
                    border:'none',
                }}
              >
                <Header id='text'>
                    Lucky one... You win 2 attempts !
                </Header>
              </Segment>
            </Portal>
          </Grid.Column>
        </Grid>
      )
    }
}

export default ModalAlmostCaught