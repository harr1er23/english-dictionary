import { configureStore } from "@reduxjs/toolkit";
import dictionaryWordSlice from "./dictionaryWords/dictionaryWordsSlice";
import addNewWordSlice from "./addNewWord/addNewWordSlice";
import userTagsSlice from "./userTags/userTagsSlice"

export const store = configureStore({
  reducer: { 
    dictionaryWordSlice,
    addNewWordSlice,
    userTagsSlice
  },
});
