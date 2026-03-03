import {createSlice} from "@reduxjs/toolkit"
import { fetchPosts } from "./postsThunk"

export const postsSlice = createSlice({
    name: "posts",
    initialState : {
        data:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default postsSlice.reducer;