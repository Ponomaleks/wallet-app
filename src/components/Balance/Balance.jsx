import React from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { authSelectors } from '../../redux/auth';
import formatNumber from '../../service/formatNumber';
import './Balance.module.css';

const useStylesReddit = makeStyles(theme => ({
  root: {
    fontFamily: 'Circe-Regular',
    width: '350px',
    height: '80px',
    lineHeight: 1.5,
    backgroundColor: '#FFFFFF',
    color: '#a6a6a6',
    border: '1px solid #e2e2e1',
    borderRadius: '30px',
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
  input: {
    fontFamily: 'SegoeUI',
    fontSize: '30px',
    lineHeight: 1.5,
    color: '#000',
    paddingTop: '10px',
  },
  startAdomerment: {
    fontFamily: 'SegoeUI',
    fontSize: '30px',
    lineHeight: 1.5,
    color: '#000',
    marginLeft: '28px',
  },
  focused: {},
}));

const Balance = () => {
  const classes = useStylesReddit();

  const balance = formatNumber(useSelector(authSelectors.getUserBalance), {
    precision: 2,
    thousand: ' ',
  });

  return (
    <TextField
      label="your balance"
      id="outlined-read-only-input"
      defaultValue={balance}
      InputProps={{
        startAdornment: (
          <InputAdornment className={classes.startAdomerment} position="start">
            ₴{' '}
          </InputAdornment>
        ),
        readOnly: true,
        classes,
        disableUnderline: true,
      }}
      variant="filled"
    />
  );
};

export default Balance;
