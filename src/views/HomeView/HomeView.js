import React, { Fragment } from 'react';
import Media from 'react-media';
import { Box } from '@material-ui/core';
import {
  TableTransactions,
  TableTransactionsMobile,
} from '../../components/TableTransactions';
import Sidebar from '../../components/Sidebar';
import s from './HomeView.module.css';
import Header from '../../components/Header';

// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from '../redux/user';

const HomeView = () => {
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Header />
      <div className={`container ${s.homeView} ${s.homeBackground}`}>
        {/* {!isLoggedIn && <div>Please, register or log in to start. </div>} */}
        <Sidebar />
        <Media
          queries={{
            mobile: '(max-width: 767px)',
            other: '(min-width: 768px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.mobile && (
                <Box
                  height="100vh"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  padding="0px"
                >
                  <TableTransactionsMobile />
                </Box>
              )}
              {matches.other && <TableTransactions />}
            </Fragment>
          )}
        </Media>
      </div>
    </>
  );
};

export default HomeView;
