import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChecked: false,
};

export const guardianCheckedSlice = createSlice({
  name: "guardianChecked",
  initialState,
  reducers: {
    SET_GUARDIAN_CHECKED: (state, { payload }) => {
      state.isChecked = payload;
    },
    CLEAR_GUARDIAN_CHECKED: (state) => {
      state.isChecked = false;
    },
  },
});

export const { SET_GUARDIAN_CHECKED, CLEAR_GUARDIAN_CHECKED } =
  guardianCheckedSlice.actions;

export const selectGuardianCheckedState = ({ guardianChecked }) =>
  guardianChecked;
export const selectGuardianChecked = ({ guardianChecked }) =>
  guardianChecked.isChecked;

export default guardianCheckedSlice.reducer;
