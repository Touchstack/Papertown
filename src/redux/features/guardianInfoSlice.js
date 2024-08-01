import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guardian_name: null,
  g_phone: null,
  personal_address: null,
};

export const guardianInfoSlice = createSlice({
  name: "guardianInfo",
  initialState,
  reducers: {
    SET_GUARDIAN_INFO: (state, { payload }) => {
      state.guardian_name = payload.guardian_name;
      state.g_phone = payload.g_phone;
      state.personal_address = payload.personal_address;
    },
    CLEAR_GUARDIAN_INFO: (state) => {
      state.guardian_name = null;
      state.g_phone = null;
      state.personal_address = null;
    },
  },
});

export const { SET_GUARDIAN_INFO, CLEAR_GUARDIAN_INFO } =
  guardianInfoSlice.actions;

export const selectGuardianInfoState = ({ guardianInfo }) => guardianInfo;

export default guardianInfoSlice.reducer;
