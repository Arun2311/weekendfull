import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {increment} from "../../redux/counterSlice"

export default function CounterRedux() {

  const count =  useSelector((state) =>state.counter.value)
  const dispatch = useDispatch()


  const handledis = () =>{


    dispatch(increment())
  }



  return (
    <div>
        <h1> Redux</h1>

        <h2>Count :  {count}</h2>

        <button onClick={handledis}>Add</button>
    </div>
  )
}




















// NEXT REDUX TOOLKITT 


// REACT <OPTIMIZATION> AND <MEMO>

// </MEMO>


// REACTTYPSCRIPT


// <USEMEMO>
//   <USECALLBACK>
//     REACT.MEMO
//     PURECOM

{/* <USEREF></USEREF> */}

// USEREDUCER




// CODE SPLITING/
// // REACT BUNDLE ISSUE
// LAZY <LOADING>
// DYNAMIC LOADING
// </LOADING>



// {/* <HOC></HOC>
//    */}
//    CUSTOMHOOK


// GIT VERCEL



