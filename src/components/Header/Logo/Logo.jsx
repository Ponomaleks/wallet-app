import React from 'react';
import s from './Logo.module.css';
import logo from '../../../images/header.png';

const Logo = () => {
  return (
    <>
      <img src={logo} alt="Logo" className={s.logo} />
      <span className={s.logo_text}>Wallet</span>
    </>
  );
};

export default Logo;
