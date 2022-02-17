import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  // getAllTransactions,
  fetchTransactions,
} from '../../redux/transactions';
import { CardTransaction } from './CardTransaction';
import MocData from '../../devData.json';
import './TableTransactionsMobile.module.css';

const TableTransactionsMobile = () => {
  // const { AllTransactions } = useSelector(getAllTransactions);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <ul>
      {MocData.map(transaction => (
        <li key={transaction._id}>
          <CardTransaction transaction={transaction} />
        </li>
      ))}
    </ul>
  );
};

export { TableTransactionsMobile };
