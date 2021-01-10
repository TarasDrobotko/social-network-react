import React from 'react';
import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: text => {
      dispatch(updateNewMessageActionCreator(text));
    }
  };
};

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(authRedirectComponent);

export default DialogsContainer;
