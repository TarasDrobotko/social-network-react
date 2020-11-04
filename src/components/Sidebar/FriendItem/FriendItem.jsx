import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css';

const FriendItem = props => {
  //console.log(props);
  let path = '/friends/' + props.friend.id;
  return (
    <div className={s.item}>
      <div className={s.avatarImg}>
        <img src={props.friend.img} />
      </div>
      <NavLink to={path}>{props.friend.friend}</NavLink>
    </div>
  );
};

export default FriendItem;
