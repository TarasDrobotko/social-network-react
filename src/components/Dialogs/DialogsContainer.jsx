import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage;
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onMessageChange = text => {
          let action = updateNewMessageActionCreator(text);
          store.dispatch(action);
        };

        return (
          <Dialogs
            updateNewMessage={onMessageChange}
            addMessage={addMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
