import React from 'react'
import {useState,useEffect} from "react"
export const Timer = () => {

    const [counter, setCounter] = useState(10);

//   First Attempts
  setInterval(() => setCounter(counter - 1), 1000);

//   Second Attempts
//   useEffect(() => {
//     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//   }, []);

//   Second Attempts - Inspection
  useEffect(() => {
    counter > 0 &&
      setInterval(() => {
        console.log(counter);
        setCounter(counter - 1);
      }, 1000);
  }, []);

   if(setCounter == 1){
       alert("Time up")
   }

//   Third Attempts
//   React.useEffect(() => {
//     const timer =
//       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]);

//   Suggested by Laurent
//   useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);
    return (
        <div>

<div>Countdown: {counter}</div>

            
        </div>
    )
}
