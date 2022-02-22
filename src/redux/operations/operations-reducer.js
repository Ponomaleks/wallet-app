import { createReducer } from '@reduxjs/toolkit';
import {
  getOperationsSuccess,
  addNewOperationSuccess,
  getRegisterFormDialog,
  modalEditOperation,
  modalDeleteOperation,
  deleteOperationSuccess,
  changeOperationSuccess,
} from './operations-action';
import { openModal, closeModal, logoutModalAction } from './operations-action';

const setTrue = () => true;
const setFalse = () => false;

const operationReducer = createReducer([], {
  [getOperationsSuccess]: (_, { payload }) => [...payload],
  [addNewOperationSuccess]: (_, { payload }) => [...payload],
  [deleteOperationSuccess]: (_, { payload }) => [...payload],
  [changeOperationSuccess]: (_, { payload }) => [...payload],
});

const modalTransaction = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

const modalLogout = createReducer(false, {
  [logoutModalAction]: (state, _) => !state,
});

const modalOperation = createReducer(false, {
  [modalEditOperation]: (state, _) => !state,
});

const modalOperationDelete = createReducer(false, {
  [modalDeleteOperation]: (state, _) => !state,
});

const registerFormDialog = createReducer(false, {
  [getRegisterFormDialog]: (state, _) => !state,
});

export {
  operationReducer,
  modalTransaction,
  modalLogout,
  registerFormDialog,
  modalOperation,
  modalOperationDelete,
};
