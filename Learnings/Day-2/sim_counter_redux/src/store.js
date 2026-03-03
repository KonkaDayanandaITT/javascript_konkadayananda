import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import reducer from "./counterSlice";

export const store = configureStore({
    reducer : {
        counter : counterReducer,
    }
});