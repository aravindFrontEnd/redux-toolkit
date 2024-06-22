
import { useSelector,useDispatch } from "react-redux";

import { increment,decrement,reset,incrementByAmount } from "./counterSlice";

import { useState } from "react";


const Counter = () => {


    const count = useSelector((store)=>store.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementAmount] =useState('');

    const addValue = Number(incrementAmount) || 0;

    const resetAll =() =>{
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
<>
<section>
    <p>{count}</p>
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
    <input type="text"
    value={incrementAmount}
    onChange={(e)=> setIncrementAmount(e.target.value)}
    placeholder="0"
    ></input>

<div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={()=>dispatch(resetAll())}>Reset</button>
    </div>
</section>
</>

  )
}

export default Counter;
