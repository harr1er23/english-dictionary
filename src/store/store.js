import { configureStore } from "@reduxjs/toolkit";
import dictionaryWordSlice from "./dictionaryWords/dictionaryWordsSlice";
import addNewWordSlice from "./addNewWord/addNewWordSlice";
import userTagsSlice from "./userTags/userTagsSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: { 
    dictionaryWordSlice,
    addNewWordSlice,
    userTagsSlice,
    authSlice,
    userSlice
  },
});
