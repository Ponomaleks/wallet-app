import axios from 'axios';
import {
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
  deleteOperationRequest,
  deleteOperationError,
  deleteOperationSuccess,
  changeOperationSuccess,
} from './operations-action';
// import actions from '../statistics/statistics-actions';
import { operationsAction } from '.';

const getOperations = () => async dispatch => {
  dispatch(getOperationsRequest());

  try {
    const {
      data: {
        response: { userOperations },
      },
    } = await axios.get('/api/operations');

    dispatch(getOperationsSuccess(userOperations));
  } catch (error) {
    dispatch(getOperationsError(error.message));
  }
};

const createOperation = operation => async dispatch => {
  dispatch(addNewOperationRequest());
  try {
    const {
      data: {
        data: { userOperations, totalBalance },
      },
    } = await axios.post('/api/operations', operation);

    dispatch(addNewOperationSuccess(userOperations));
    // dispatch(actions.fetchBalanceSuccess(totalBalance));
  } catch (error) {
    dispatch(addNewOperationError(error.message));
  }
};

const changeOperation = (operation, operationId) => async dispatch => {
  dispatch(operationsAction.changeOperationRequest());

  try {
    const {
      data: {
        data: { userOperations, totalBalance },
      },
    } = await axios.patch(`/api/operations/${operationId}`, operation);

    dispatch(changeOperationSuccess(userOperations));
    // dispatch(actions.fetchBalanceSuccess(totalBalance));
  } catch (error) {
    dispatch(operationsAction.changeOperationError(error));
  }
};

const deleteOperation =
  ({
    deleteOperationId,
    deleteOperationDate,
    operationAmount,
    deleteOperationType,
  }) =>
  async dispatch => {
    dispatch(deleteOperationRequest());
    try {
      const {
        data: {
          data: { userOperations, totalBalance },
        },
      } = await axios.delete(`/api/operations/${deleteOperationId}`, {
        data: {
          date: deleteOperationDate,
          type: deleteOperationType,
          amount: operationAmount,
        },
      });

      dispatch(deleteOperationSuccess(userOperations));
    //   dispatch(actions.fetchBalanceSuccess(totalBalance));
    } catch (error) {
      dispatch(deleteOperationError(error.message));
    }
  };

export { getOperations, createOperation, deleteOperation, changeOperation };