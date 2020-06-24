import React,{useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {
  let[count,setCount]=useState(1)
  let[isMorning,setMorning]=useState(true);
  return(
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time={isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br/>
      <button onClick={
        ()=>setCount(count+1)}>
        update counter</button>
        <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  )
}


