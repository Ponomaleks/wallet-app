import React, { Fragment } from 'react';
import Media from 'react-media';
import { Box, Container, Flexbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableTransactions,
  TableTransactionsMobile,
} from '../../components/TableTransactions';
// import Currency from '../components/Currency';
// import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Sidebar from '../../components/Sidebar';
import s from './HomeView.module.css';

// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from '../redux/user';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     padding: 0,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const HomeView = () => {
  // const classes = useStyles();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={`container ${s.homeView} ${s.homeBackground}`}>
      {/* {!isLoggedIn && <div>Please, register or log in to start. </div>} */}
      <Sidebar />
      <TableTransactions />
    </div>
  );
};

export default HomeView;

// <Divider className={classes.divider} orientation="vertical" />;
