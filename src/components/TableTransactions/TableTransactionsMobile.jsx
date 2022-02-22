import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
  fetchTransactions,
} from '../../redux/transactions';
import { CardTransaction } from './CardTransaction';
import './TableTransactionsMobile.module.css';

const TableTransactionsMobile = () => {
  const AllTransactions = useSelector(getAllTransactions);
  // const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  // const All = event.toLocaleDateString(undefined, AllTransactions);
  // const All = AllTransactions.sort((a, b) => (a.date > b.date ? 1 : -1));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    AllTransactions && (
      <ul>
        {AllTransactions.map(transaction => (
          <li key={transaction._id}>
            <CardTransaction transaction={transaction} />
          </li>
        ))}
      </ul>
    )
  );
};

export { TableTransactionsMobile };
