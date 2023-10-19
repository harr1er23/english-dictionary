import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchUserTags = createAsyncThunk(
    'userTags/fetchUserTags', async(params) => {
        const {
            tagValue
          } = params;
        const {data} = await axios.get(process.env.REACT_APP_TAGS_KEY)
        return data;
    }
)


const initialState  = {
    userTags: [],
    status: 'loading' //loading | error | success
};

const userTags = createSlice({
    name: "userTags",
    initialState,
    reducers: {
        addNewTag(state, action){
            state.dictionaryWords.push(action.payload);
        },
        removeNewTag(state, action){

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserTags.pending, (state) => {
            state.status = 'loading';
            state.dictionaryWords = [];
        });
        builder.addCase(fetchUserTags.fulfilled, (state, action) => {
            state.dictionaryWords = action.payload;
            state.status = 'success'
        });
        builder.addCase(fetchUserTags.rejected, (state) => {
            state.status = 'error';
            state.dictionaryWords = [];
        })
    },
});

export const selectItems = (state) => state.userTags

export const {addNewTag} = userTags.actions;

export default userTags.reducer; 