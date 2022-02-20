import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:8080/api';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    fetchTransactions.pending();
    try {
      const { data } = await axios.get('/transaction');

      console.log(data);

      return data;
    } catch (error) {
      fetchTransactions.rejected(error);
    }
  },
);

// const addTransaction = createAsyncThunk(
//   'transactions/addTransaction',
//   async transaction => {
//     addTransaction.pending();
//     try {
//       const { data } = await axios.post('/transactions', transaction);
//       console.log(data);
//       return data;
//     } catch (error) {
//       addTransaction.rejected(error);
//     }
//   },
// );

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async id => {
    deleteTransaction.pending();
    try {
      await axios.delete(`/transaction/${id}`);

      return id;
    } catch (error) {
      deleteTransaction.rejected(error);
    }
  },
);

export { fetchTransactions, deleteTransaction };
