import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  deleteTransaction,
} from './transactions-operations';

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [deleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,

  [deleteTransaction.pending]: () => true,
  [deleteTransaction.fulfilled]: () => false,
  [deleteTransaction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, action) => action.payload,
  [fetchTransactions.pending]: () => null,

  [deleteTransaction.rejected]: (_, action) => action.payload,
  [deleteTransaction.pending]: () => null,
});

export default combineReducers({ items, loading, error });
