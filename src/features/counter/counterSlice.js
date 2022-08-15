//import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

//creating the counter slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState, //here prolly we specify where we are storing our state attrbiutes
    reducers:{ //in reducers, we will name all our different actions, similar to "useReducer" hook 
        increment: (state) =>{
            state.count += 1;
        },
        decrement: (state) =>{
            state.count -= 1;
        }
    }
})

//export the actions from reducers
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;