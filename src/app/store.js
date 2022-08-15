import { configureStore } from "@reduxjs/toolkit"; //createStore was old
import counterReducer from "../features/counter/counterSlice";

export const store =  configureStore({
    reducer:{

    }
})