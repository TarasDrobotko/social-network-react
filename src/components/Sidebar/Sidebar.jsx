import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem';
import s from './Sidebar.module.css';

const Sidebar = props => {
  let sidebarElements = props.state.friends.map(friend => (
    <FriendItem friend={friend} />
  ));

  return (
    <div>
      <h3>Friends</h3>
      <div className={s.sidebarElements}>{sidebarElements}</div>
    </div>
  );
};

export default Sidebar;
