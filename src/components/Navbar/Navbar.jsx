import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarContainer from '../Sidebar/SidebarContainer';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.activeLink}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={`${s.item} ${s.activeLink}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <SidebarContainer />
    </nav>
  );
};

export default Navbar;
