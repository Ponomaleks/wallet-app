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

    const arr = [...AllTransactions];
    const sortedAllTransactions = arr.sort(function(a, b){
      var dateA=new Date(a.date);
      var dateB=new Date(b.date);
      return dateB - dateA;
    })

    
  return (
    AllTransactions && (
      <ul>
        {sortedAllTransactions.map(transaction => 
          (<li key={transaction._id}>
            <CardTransaction transaction={transaction} />
          </li>
        ))}
      </ul>
    )
  );
};

export { TableTransactionsMobile };
