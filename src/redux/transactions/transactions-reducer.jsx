import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
} from './transactions-operations';

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,

  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,

  [deleteTransaction.pending]: () => true,
  [deleteTransaction.fulfilled]: () => false,
  [deleteTransaction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, action) => action.payload,
  [fetchTransactions.pending]: () => null,

  [addTransaction.rejected]: (_, action) => action.payload,
  [addTransaction.pending]: () => null,

  [deleteTransaction.rejected]: (_, action) => action.payload,
  [deleteTransaction.pending]: () => null,
});

export default combineReducers({ items, loading, error });
