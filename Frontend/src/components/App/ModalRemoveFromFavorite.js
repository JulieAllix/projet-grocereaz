import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import store from 'src/store';
import { setRemoveFromFavoriteStatus, closeAllModals } from 'src/actions/recipes';

export default class ModalExampleControlled extends Component {

  handleClose = () => {
    store.dispatch(setRemoveFromFavoriteStatus(false));
    store.dispatch(closeAllModals());
  }

  handleRemove = () => {
    store.dispatch(setRemoveFromFavoriteStatus(false));
    store.dispatch(closeAllModals());
    window.location.href = `${process.env.URL_FRONT}/favorite-recipes`;
  }

  render() {
    return (
      <Modal
        open={this.props.removeFromFavoriteStatus}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="trash" content="RECIPE REMOVED FROM YOUR FAVORITES" />
        <Modal.Content>
          <h3>Recipe successfully removed from your favorite recipes !</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/favorite-recipes">
            <Button color="green" onClick={this.handleRemove} inverted>
              <Icon name="checkmark" /> Got it !
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    );
  }
}
