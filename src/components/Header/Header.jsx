import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <NavLink exact to="/home" className={s.home_link}>
          <Logo />
        </NavLink>
        <UserMenu />
      </header>
    </>
  );
};

export default Header;
