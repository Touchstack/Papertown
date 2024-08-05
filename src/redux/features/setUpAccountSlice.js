import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const setUpAccountSlice = createSlice({
  name: "setUpAccount",
  initialState,
  reducers: {
    SET_UP_ACCOUNT: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    CLEAR_SET_UP_ACCOUNT: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { SET_UP_ACCOUNT, CLEAR_SET_UP_ACCOUNT } =
  setUpAccountSlice.actions;

export const selectSetUpAccountState = ({ setUpAccount }) => setUpAccount;

export default setUpAccountSlice.reducer;
