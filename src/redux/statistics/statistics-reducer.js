import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchStatistics } from './statistics-operatons';

const items = createReducer([], {
  [fetchStatistics.fulfilled]: (_, { payload }) => payload.formatedData,
});
const costs = createReducer([], {
  [fetchStatistics.fulfilled]: (_, { payload }) => payload.costs,
});
const income = createReducer([], {
  [fetchStatistics.fulfilled]: (_, { payload }) => payload.income,
});

const error = createReducer(null, {
  [fetchStatistics.rejected]: (_, action) => action.payload,
  [fetchStatistics.pending]: () => null,
});

export default combineReducers({ items, costs, income, error });
