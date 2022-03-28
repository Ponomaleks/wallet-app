import axios from 'axios';
import {
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
} from './operations-action';

axios.defaults.baseURL = 'https://wallet-app-backend-gr10.herokuapp.com/api';

const createOperation = operation => async dispatch => {
  dispatch(addNewOperationRequest());
  try {
    const {
      data: {
        data: { userOperations },
      },
    } = await axios.post('/transaction/add', operation);

    dispatch(addNewOperationSuccess(userOperations));
  } catch (error) {
    dispatch(addNewOperationError(error.message));
  }
};

export { createOperation };
