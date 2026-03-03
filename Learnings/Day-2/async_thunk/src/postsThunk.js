import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    "posts/fetchposts",
    async() => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"            
        )
        if(!response.ok){
            throw new Error("Failed to fetch posts");
        }

        return response.json();
    }
)