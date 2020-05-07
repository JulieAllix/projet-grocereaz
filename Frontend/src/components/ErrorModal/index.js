import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ErrorModal extends Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='warning sign' content='Warning!!!' />
        <Modal.Content>
          <h3>Something went wrong... you will be redirected to the home page.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color='red' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ErrorModal;
