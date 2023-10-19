import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  show: false,
};

export const sessionModalSlice = createSlice({
  name: "sessionModal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

// export const selectSessionModalShow = (state: RootState) => state.sessionModalSlice;

export const { toggleModal } = sessionModalSlice.actions;

export default sessionModalSlice.reducer;