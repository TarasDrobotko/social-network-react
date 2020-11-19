import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  let state = props.dialogsPage;

  let messagesElements = state.messagesData.map(message => (
    <Message message={message} />
  ));

  let dialogsElements = state.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.addMessage}>
        <textarea
          onChange={onMessageChange}
          value={state.newMessageText}
          ref={newMessageElement}
          placeholder="Enter your message"
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
