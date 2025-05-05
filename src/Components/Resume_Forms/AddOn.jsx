import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,byValue} from "/src/Redux/ResumeSlices.js"

const AddOn = () => {
  const dispatch = useDispatch();
  return (
    
      <center>
        <h1>Counter App</h1>
        <p>Value: {useSelector((state) => state.form.value)}</p>
    
        <button className='p-2 gap-2 flex bg-white text-black text-2xl'  onClick={() => dispatch(increment())}>Increment</button>
        <button className='p-2 gap-2 flex bg-white text-black text-2xl' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='p-2 gap-2 flex bg-white text-black text-2xl' onClick={() => dispatch(byValue(5))}>Increment by 5</button>
      </center>
    
    
  )
}

export default AddOn