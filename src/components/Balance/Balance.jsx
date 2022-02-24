import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';
import {
  fetchTransactions,
  getAllTransactions,
} from '../../redux/transactions';
import { authSelectors } from '../../redux/auth';
import formatNumber from '../../service/formatNumber';
import s from './Balance.module.css';

const useStylesReddit = makeStyles(theme => ({
  root: {
    fontFamily: 'Circe-Regular',
    width: '350px',
    height: '80px',
    lineHeight: 1.5,
    color: '#a6a6a6',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',

    [theme.breakpoints.down(1280)]: {
      width: '334px',
    },
    [theme.breakpoints.down(768)]: {
      width: '280px',
    },
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    '&$focused': {
      backgroundColor: '#FFFFFF',
      borderColor: theme.palette.primary.main,
    },
  },
  inputBase: {
    background: 'red',
  },
  input: {
    fontFamily: 'SegoeUI',
    fontSize: '30px',
    lineHeight: 1.5,
    borderRadius: '30px 0 0 30px',
    paddingTop: '10px',
    overflow: 'hidden',
  },
  startAdomerment: {
    fontFamily: 'SegoeUI',
    fontSize: '20px',
    lineHeight: 1.5,
    color: '#000',
    backgroundColor: '#FFFFFF',
    marginTop: '15px',
    marginLeft: '28px',
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
    dispatch(fetchTransactions());
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
          variant="filled"
        />
      </div>
    )
  );
};

export default Balance;
