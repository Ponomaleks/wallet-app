import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Circe-Regular',
    width: '280px',
    lineHeight: 1.5,
    backgroundColor: '#fff',
    margin: 0,
  },
  cardContent: {
    // paddingTop: 0,
    // paddingBottom: 0,
  },
  item: {
    fontSize: '18px',
    textTransform: 'none',
    paddingRight: '4px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  title: {
    display: 'inline-block',
    width: '119.5px',
    fontWeight: 700,
  },
  value: {
    display: 'inline-block',
    width: '50%',
    fontSize: '16px',
    textAlign: 'right',
    marginRight: '-50%',
  },
  greenBorder: {
    borderLeftStyle: 'solid',
    borderLeftColor: '#24cca7',
    borderLeft: '5px',
  },
  redBorder: {
    borderLeftStyle: 'solid',
    borderLeftColor: '#FF6596',
    borderLeft: '5px',
  },
  greenText: {
    fontWeight: 700,
    color: '#24cca7',
  },
  redText: {
    fontWeight: 700,
    color: '#FF6596',
  },
});

const CardTransaction = ({ transaction }) => {
  const classes = useStyles();

  return (
    <Card
      className={
        transaction.typeTransaction === '+'
          ? classes.greenBorder
          : classes.redBorder
      }
    >
      <CardContent className={classes.cardContent}>
        <p className={classes.item}>
          <span className={classes.title}>Date</span>
          <span className={classes.value}>{transaction.date}</span>
        </p>
        <Divider />
        <p className={classes.item}>
          <span className={classes.title}>Type</span>
          <span className={classes.value}>{transaction.typeTransaction}</span>
        </p>
        <Divider />
        <p className={classes.item}>
          <span className={classes.title}>Category</span>
          <span className={classes.value}>{transaction.name}</span>
        </p>
        <Divider />
        <p className={classes.item}>
          <span className={classes.title}>Commentary</span>
          <span className={classes.value}>{transaction.commentary}</span>
        </p>
        <Divider />
        <p className={classes.item}>
          <span className={classes.title}>Sum</span>
          <span
            className={
              transaction.typeTransaction === '+'
                ? classes.greenText + ' ' + classes.value
                : classes.redText + ' ' + classes.value
            }
          >
            {transaction.amountTransaction.toFixed(2)}
          </span>
        </p>
        <Divider />
        <p className={classes.item}>
          <span className={classes.title}>Balance</span>
          <span className={classes.value}>
            {transaction.balance.toFixed(2)}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export { CardTransaction };
