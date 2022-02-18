import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('operations/openModal');
const closeModal = createAction('operations/closeModal');

const modalEditOperation = createAction('operation/modalEditOperation');

const modalDeleteOperation = createAction('operation/modalDeleteOperation');

const addNewOperationRequest = createAction('operation/addOperationRequest');
const addNewOperationSuccess = createAction('operation/addOperationSuccess');
const addNewOperationError = createAction('operation/addOperationError');

const getOperationsRequest = createAction('operation/getOperationsRequest');
const getOperationsSuccess = createAction('operation/getOperationsSuccess');
const getOperationsError = createAction('operation/getOperationsError');

const deleteOperationRequest = createAction(
  'operations/deleteOperationRequest',
);
const deleteOperationSuccess = createAction(
  'operations/deleteOperationSuccess',
);
const deleteOperationError = createAction('operations/deleteOperationError');

const changeOperationRequest = createAction('operation/changeOperationRequest');
const changeOperationSuccess = createAction('operation/changeOperationSuccess');
const changeOperationError = createAction('operation/changeOperationError');

const logoutModalAction = createAction('operations/modalLogout');

const getRegisterFormDialog = createAction('operations/getRegisterFormDialog');

export {
  openModal,
  closeModal,
  logoutModalAction,
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
  deleteOperationRequest,
  deleteOperationSuccess,
  deleteOperationError,
  changeOperationRequest,
  changeOperationSuccess,
  changeOperationError,
  getRegisterFormDialog,
  modalEditOperation,
  modalDeleteOperation,
};