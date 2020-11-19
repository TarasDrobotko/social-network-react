import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  let messagesElements = props.state.messagesData.map(message => (
    <Message message={message} />
  ));

  let dialogsElements = props.state.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.addMessage}>
        <textarea
          onChange={onMessageChange}
          value={props.state.newMessageText}
          ref={newMessageElement}
          placeholder="Enter your message"
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
