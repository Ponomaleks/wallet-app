import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useDispatch } from 'react-redux';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://wallet-app-backend-gr10.herokuapp.com/api';

const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async ({ month, year }) => {
    fetchStatistics.pending();
    try {
      const { data } = await axios.get(
        `/statistics?month=${month}&year=${year}`,
      );
      fetchStatistics.fulfilled();
      return data;
    } catch (error) {
      fetchStatistics.rejected(error);
    }
  },
);

export { fetchStatistics };
