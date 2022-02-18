import { createSelector } from '@reduxjs/toolkit';

const getModalValue = state => state.modal;

const getLogoutModalValue = state => state.logoutModalAction;

const getOperations = state => state.operations;

const getSortedOperations = createSelector([getOperations], operations => {
  return operations.slice().sort((a, b) => b.date - a.date);
});

const getRegisterFormDialog = state => state.getRegisterFormDialog;

const getOperationModalValue = state => state.modalOperation;

const getModalDeleteOperationValue = state => state.modalOperationDelete;

export {
  getModalValue,
  getLogoutModalValue,
  getOperations,
  getSortedOperations,
  getRegisterFormDialog,
  getOperationModalValue,
  getModalDeleteOperationValue,
};