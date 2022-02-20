import React from 'react';
import s from './CurrencyView.module.css';
import Currency from '../../components/Currency';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';

export default function CurrencyView() {
  return (
    <>
      <Header />
      <div className={s.currWrapper}>
        <Navigation />
        <Currency />
      </div>
    </>
  );
}
