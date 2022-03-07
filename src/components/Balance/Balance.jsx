import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';
import {
  // fetchTransactions,
  getAllTransactions,
} from '../../redux/transactions';
import { authSelectors, authOperations } from '../../redux/auth';
import formatNumber from '../../service/formatNumber';
import s from './Balance.module.css';

const useStylesReddit = makeStyles(theme => ({
  root: {
    fontFamily: 'Circe-Regular',
    lineHeight: 1.5,
    color: '#a6a6a6',
  },
  input: {
    fontFamily: 'Poppins Bold',
    fontSize: '30px',
    paddingTop: '10px',
  },
  startAdomerment: {
    fontFamily: 'Poppins Regular',
    fontSize: '30px',
    [theme.breakpoints.up(768)]: {
      marginLeft: '40px',
    },
  },
  focused: {},
}));

const Balance = () => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(getAllTransactions);
  const balance = formatNumber(useSelector(authSelectors.getUserBalance), {
    precision: 2,
    thousand: ' ',
  });
  const classes = useStylesReddit();

  useEffect(() => {
    if (allTransactions) return;
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, allTransactions]);

  return (
    balance && (
      <div className={s.container}>
        <TextField
          className={s.field}
          label="your balance"
          id="outlined-read-only-input"
          defaultValue={balance}
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={classes.startAdomerment}
                position="start"
              >
                <span className={s.currency}>₴ </span>
              </InputAdornment>
            ),
            readOnly: true,
            // classes,
            disableUnderline: true,
          }}
          variant="standard"
        />
      </div>
    )
  );
};

export default Balance;
