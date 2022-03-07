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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    AllTransactions && (
      <ul>
        {AllTransactions.map(transaction => 
        // transaction.sort((a, b) => (a.date > b.date ? 1 : -1))
          (<li key={transaction._id}>
            <CardTransaction transaction={transaction} />
          </li>
        ))}
      </ul>
    )
  );
};

export { TableTransactionsMobile };
