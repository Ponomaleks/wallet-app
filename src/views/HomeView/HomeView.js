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
import Modal from '../../components/ModalAddTransactions/Modal';
import BackdropFilter from '../../components/BackdropFilter/BackdropFilter';

const HomeView = () => {
  return (
    <>
      <Header />
      <BackdropFilter>
        <div className={`container ${s.homeView} ${s.homeBackground}`}>
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
                {matches.other && (
                  <>
                    <Modal />
                    <TableTransactions />
                  </>
                )}
              </Fragment>
            )}
          </Media>
          <Modal />
        </div>
      </BackdropFilter>
    </>
  );
};

export default HomeView;
