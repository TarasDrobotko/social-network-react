import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = text => {
    let action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessage={onMessageChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
