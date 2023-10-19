import { createSlice } from '@reduxjs/toolkit'


const initialState  = {
    idWord: '',
    wordValue: '',
    transcriptionValue: '',
    translatesValue: [],
    tagsValue: [],
    examplesValue: []
};

const addNewWord = createSlice({
    name: "addNewWord",
    initialState,
    reducers: {
        setWordId(state, action){
            state.idWord = action.payload;
        },
        setWordValue(state, action){
            state.wordValue = action.payload;
        },
        setTranscriptionValue(state, action){
            state.transcriptionValue = action.payload;
        },
        setTranslatesValue(state, action){
            state.translatesValue.push(action.payload);
        },
        setTagsValue(state, action){
            state.tagsValue.push();
        },
        deleteTagsValue(state, action){

        }
    }
});

export const selectItems = (state) => state.addNewWord;

export const { setWordValue, setTranscriptionValue} = addNewWord.actions;

export default addNewWord.reducer; 