import {createSlice} from "@reduxjs/toolkit"
import { logout } from "./logout"

const counterSlice = createSlice({
    name : "counter",
    initialState: {value : 5},
    reducers : {
        increment:(state) => {
            state.value +=1;
        }
    },

    extraReducers:(builder) => {
        builder.addCase(logout, (state) => {
            state.value = 0;
        });
    }
})

export default counterSlice.reducer;