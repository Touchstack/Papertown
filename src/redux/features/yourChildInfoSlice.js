import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: null,
  last_name: null,
  date_of_birth: null,
  relationship: null,
};

export const yourChildInfoSlice = createSlice({
  name: "yourChildInfo",
  initialState,
  reducers: {
    SET_YOUR_CHILD_INFO: (state, { payload }) => {
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.date_of_birth = payload.date_of_birth;
      state.relationship = payload.relationship;
    },
    CLEAR_YOUR_CHILD_INFO: (state) => {
      state.first_name = null;
      state.last_name = null;
      state.date_of_birth = null;
      state.relationship = null;
    },
  },
});

export const { SET_YOUR_CHILD_INFO, CLEAR_YOUR_CHILD_INFO } =
  yourChildInfoSlice.actions;

export const selectYourChildInfoState = ({ yourChildInfo }) => yourChildInfo;

export default yourChildInfoSlice.reducer;
