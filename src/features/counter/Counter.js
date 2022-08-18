import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

//import the actions from the reducer
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

import { useState } from 'react';

const Counter = () => {

  //add our state to the component  
  const count = useSelector((state) => state.counter.count); //counter is prolly 4m store.js(available to all files) while count is prolly 4m counterSlice.js as "counter"
                                                            //in store.js captures the state in "counterSlice.js"
                                                        //useSelector's argument prolly holds all the states from different files inside "reducer" attribute
  const dispatch = useDispatch(); //dispatch's argument is where we call different reducer actions

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0; //checking if the num we want to increment by is int, else set increment to 0

  const resetAll = () =>{
    setIncrementAmount(0); //the "reset()" func from counterSlice does not change this box to 0
                        //that's the diff betn reset() and resetAll()
    dispatch(reset(0)); //the func 4m the slice file to set its global state to 0
  }

  return (
    <div>Counter
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <input
                type="text"
                value = {incrementAmount}
                onChange = {(e) => setIncrementAmount(e.target.value)}
            >
            </input>
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Button</button>
            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(resetAll())}>ResetAll</button>
            </div>
        </section>
    </div>
  )
}

export default Counter