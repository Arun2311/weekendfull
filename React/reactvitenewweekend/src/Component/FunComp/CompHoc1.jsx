import React, { useReducer } from 'react'



const countfunction = (state,action) =>{

    if(action.type === "inc"){

        return {count : state.count + 1}

    }


    if(action.type === "dec"){

        return {count : state.count - 1}

    }

    

}




export default function CompHoc1({data}) {


    const [state ,dispatch] = useReducer(countfunction,{count:0})

  return (
    <div>
      <h1>CompHoc1</h1>


      <h1>{state.count}</h1>


      <button onClick={()=>dispatch({type : "inc"})}>Add</button>

      <button onClick={()=>dispatch({type : "dec"})}>sub</button>


      {/* {console.log(data)} */}
      
    </div>
  )
}
