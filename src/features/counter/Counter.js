import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

//import the actions from the reducer
import { increment, decrement } from './counterSlice';


const Counter = () => {

  //add our state to the component  
  const count = useSelector((state) => state.counter.count); //counter is prolly 4m store.js(available to all files) while count is prolly 4m counterSlice.js as "counter"
                                                            //in store.js captures the state in "counterSlice.js"
                                                        //useSelector's argument prolly holds all the states from different files inside "reducer" attribute
  const dispatch = useDispatch(); //dispatch's argument is where we call different reducer actions

  return (
    <div>Counter
        <section>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </section>
    </div>
  )
}

export default Counter