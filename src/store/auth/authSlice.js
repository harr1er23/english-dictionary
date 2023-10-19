import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

const initialState = {
    email: "",
    pass: "",
    nickName: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPass: (state, action) => {
      state.pass = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.nickName = action.payload;
    },
    clearValues: (state, action) => {
      state.pass = "";
      state.email = "";
      state.nickName = "";
    }
  },
});

// export const selectLogin = (state: RootState) => state.loginSlice;

export const { setEmail, setPass, setName, clearValues} = authSlice.actions;

export default authSlice.reducer;