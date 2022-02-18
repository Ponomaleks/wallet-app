import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { alert, defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;

axios.defaults.baseURL = 'http://localhost:8080/api'; //поставить ссылку на бек

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      console.log(credentials);
      console.log(data.user);
      const user = data.user;

      const login = await axios.post('auth/login', user);
      const activeUser = login.user;
      const activeToken = login.token;
      token.set(activeToken);

      const finishedUser = {
        token: activeToken,
        user: activeUser,
      };

      return finishedUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const login = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      console.log(data.token);
      token.set(data.token);
      return data;
    } catch (error) {
      alert({
        text: 'Not authorized',
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: 'down',
      });
      return rejectWithValue(error);
    }
  },
);

const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.get('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const operations = {
  register,
  logout,
  login,
  fetchCurrentUser,
};
export default operations;
