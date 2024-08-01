import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const resetPasswordEmailSlice = createSlice({
  name: "resetPasswordEmail",
  initialState,
  reducers: {
    SET_RESET_PASSWORD_EMAIL: (state, { payload }) => {
      state.email = payload;
    },
    CLEAR_RESET_PASSWORD_EMAIL: (state) => {
      state.status = null;
    },
  },
});

export const { SET_RESET_PASSWORD_EMAIL, CLEAR_RESET_PASSWORD_EMAIL } =
  resetPasswordEmailSlice.actions;

export const selectResetPasswordEmail = ({ resetPasswordEmail }) => resetPasswordEmail.email;

export default resetPasswordEmailSlice.reducer;
