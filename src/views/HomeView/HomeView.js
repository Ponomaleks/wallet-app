import React, { Fragment } from 'react';
import Media from 'react-media';
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableTransactions,
  TableTransactionsMobile,
} from '../../components/TableTransactions';
import Currency from '../components/Currency';
// import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Sidebar from '../../components/Sidebar';
import s from './HomeView.module.css';

// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from '../redux/user';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomeView = () => {
  const classes = useStyles();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={`container ${s.homeView} ${s.homeBackground}`}>
      {/* {!isLoggedIn && <div>Please, register or log in to start. </div>} */}
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
                <Container fixed className={classes.root}>
                  <Grid item xs={'auto'}>
                    <Sidebar />
                    <TableTransactionsMobile />
                  </Grid>
                </Container>
              </Box>
            )}
            {matches.other && (
              <Box
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Container className={classes.root}>
                  {/* fixed */}
                  <Grid container spacing={4}>
                    <Grid item xs={'auto'}>
                      <Sidebar />
                      <Currency />
                      {/* </Grid> */}
                      {/* <Grid item xs={'auto'}> */}
                      <TableTransactions />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default HomeView;

// <Divider className={classes.divider} orientation="vertical" />;
