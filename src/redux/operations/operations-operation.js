import axios from 'axios';
import {
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,

} from './operations-action';

axios.defaults.baseURL = 'http://localhost:8080/api';

const createOperation = operation => async dispatch => {
  dispatch(addNewOperationRequest());
  try {
    const {
      data: {
        data: { userOperations},
      },
    } = await axios.post('/transaction/add', operation);
    
    dispatch(addNewOperationSuccess(userOperations));
  } catch (error) {
    dispatch(addNewOperationError(error.message));
  }
};

export { createOperation};