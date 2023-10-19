import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchDictionaryWords = createAsyncThunk(
    'dictionaryWords/fetchDictionaryWords', async(params) => {
        // const {
        //     tags,
        //     searchValue
        //   } = params;
        const {data} = await axios.get(process.env.REACT_APP_DICTIONARY_KEY)
        return data;
    }
)


const initialState  = {
    dictionaryWords: [],
    status: 'loading' //loading | error | success
};

const dictionaryWordsSlice = createSlice({
    name: "dictionaryWords",
    initialState,
    reducers: {
        addNewWord(state, action){
            state.dictionaryWords.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDictionaryWords.pending, (state) => {
            state.status = 'loading';
            state.dictionaryWords = [];
        });
        builder.addCase(fetchDictionaryWords.fulfilled, (state, action) => {
            state.dictionaryWords = action.payload;
            state.status = 'success'
        });
        builder.addCase(fetchDictionaryWords.rejected, (state) => {
            state.status = 'error';
            state.dictionaryWords = [];
        })
    },
});

export const selectWords = (state) => state.dictionaryWords;

export const {addNewWord} = dictionaryWordsSlice.actions;

export default dictionaryWordsSlice.reducer; 