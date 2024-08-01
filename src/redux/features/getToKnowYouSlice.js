import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: null,
  last_name: null,
  date_of_birth: null,
  phone_number: null,
  personal_address: null,
};

export const getToKnowYouSlice = createSlice({
  name: "getToKnowYou",
  initialState,
  reducers: {
    SET_GET_TO_KNOW_YOU: (state, { payload }) => {
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.date_of_birth = payload.date_of_birth;
      state.phone_number = payload.phone_number;
      state.personal_address = payload.personal_address;
    },
    CLEAR_GET_TO_KNOW_YOU: (state) => {
      state.first_name = null;
      state.last_name = null;
      state.date_of_birth = null;
      state.phone_number = null;
      state.personal_address = null;
    },
  },
});

export const { SET_GET_TO_KNOW_YOU, CLEAR_GET_TO_KNOW_YOU } =
  getToKnowYouSlice.actions;

export const selectGetToKnowYouState = ({ getToKnowYou }) => getToKnowYou;

export default getToKnowYouSlice.reducer;
