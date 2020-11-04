import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <div className={s.avatarImg}>
        <img src="https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg" />
      </div>
      <NavLink activeClassName={s.activeLink} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
