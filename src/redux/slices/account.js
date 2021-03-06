import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import {
  createAccountUrl,
  loginUrl,
} from '../constants/urls';

const initialState = {
  token: null,
  user: {},
  discountCodes: [],
};

export const loginAction = createAsyncThunkApi(
  'account/loginAction',
  Apis.POST,
  loginUrl,
  {
    defaultNotification: {
      success: 'دوباره سلام!',
      error: 'نام کاربری یا رمز عبور اشتباه است!',
    },
  }
);


export const createAccountAction = createAsyncThunkApi(
  'account/createAccountAction',
  Apis.POST,
  createAccountUrl,
  {
    defaultNotification: {
      success: 'حساب کاربری با موفقیت ساخته شد.',
      error: 'مشکلی وجود دارد. دوباره تلاش کن!',
    },
  }
);

const isFetching = (state) => {
  state.isFetching = true;
};

const isNotFetching = (state) => {
  state.isFetching = false;
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: {
    [loginAction.pending.toString()]: isFetching,
    [loginAction.fulfilled.toString()]: (state, { payload: { response } }) => {
      console.log(response)
      state.token = response.access;
      state.isFetching = false;
    },
    [loginAction.rejected.toString()]: isNotFetching,

    [createAccountAction.pending.toString()]: isFetching,
    [createAccountAction.fulfilled.toString()]: isNotFetching,
    [createAccountAction.rejected.toString()]: isNotFetching,
  },
});

export const { logout: logoutAction } = accountSlice.actions;

export const { reducer: accountReducer } = accountSlice;
