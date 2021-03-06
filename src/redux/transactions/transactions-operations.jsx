import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://wallet-app-backend-gr10.herokuapp.com/api';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    fetchTransactions.pending();
    try {
      const { data } = await axios.get('/transaction');
      return data;
    } catch (error) {
      fetchTransactions.rejected(error);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async id => {
    deleteTransaction.pending();
    try {
      await axios.delete(`/transaction/${id}`);
      // window.location.reload();
      return id;
    } catch (error) {
      deleteTransaction.rejected(error);
    }
  },
);

export { fetchTransactions, deleteTransaction };
