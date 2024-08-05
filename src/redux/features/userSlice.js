import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  access_token: null,
  token_type: null,
  user: {},
  writer: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, { payload }) => {
      state.status = payload.status;
      state.access_token = payload.access_token;
      state.token_type = payload.token_type;
      state.user = payload.user;
      state.writer = payload.writer;
    },
    CLEAR_USER: (state) => {
      state.status = null;
      state.access_token = null;
      state.token_type = null;
      state.user = {};
      state.writer = {};
    },
  },
});

export const { SET_USER, CLEAR_USER } = userSlice.actions;

export const selectAccessToken = ({ user }) => user.access_token;
export const selectStatus = ({ user }) => user.status;
export const selectTokenType = ({ user }) => user.token_type;
export const selectUser = ({ user }) => user.user;
export const selectWriter = ({ user }) => user.writer;

export default userSlice.reducer;
