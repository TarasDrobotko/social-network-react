import React from 'react';
import s from './../Dialogs.module.css';

const Message = props => {
  return (
    <div className={s.message}>
      <div className={s.avatarImg}>
        <img src={props.message.img} />
      </div>
      {props.message.message}
    </div>
  );
};

export default Message;
