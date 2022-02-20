import React, { Fragment } from 'react';
import Media from 'react-media';
import s from './CurrencyView.module.css';
import Currency from '../../components/Currency';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation/Navigation';

export default function CurrencyView() {
  return (
    // <Media
    //   queries={{
    //     mobile: '(max-width: 767px)',
    //   }}
    // >
    //   {matches => (
    //     <>
    //       {matches.mobile && (
    //         <Fragment>
    //           <Header />
    //           <div className={s.currWrapper}>
    //             <Navigation />
    //             <Currency />
    //           </div>
    //         </Fragment>
    //       )}
    //     </>
    //   )}
    // </Media>

    // <Media
    //   query="(max-width: 767px)"
    //   render={() => (
    //     <>
    //       <Header />
    //       <div className={s.currWrapper}>
    //         <Navigation />
    //         <Currency />
    //       </div>
    //     </>
    //   )}
    // />
    <>
      <Header />
      <div className={s.currWrapper}>
        <Navigation />
        <Currency />
      </div>
    </>
  );
}
