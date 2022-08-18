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
        },
        reset: (state) =>{
            state.count = 0;
        },
        incrementByAmount: (state, action) =>{ //the 2nd arg is like useReducer hook as it also has payloads
            state.count += action.payload;
        }
    }
})

//export the actions from reducers
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;