import React, { useContext } from 'react'
import { CartContextApi } from '../../context/CartContextApi'

export default function CounterContext() {

    const {count,increment} =  useContext(CartContextApi)
  return (
    <div>
        
        
        <h1> CounterContext </h1>



        <h2 className='mt-4  ms-4'>Cart Count  : {count}</h2>



        <button  onClick={increment} className='mt-4 btn btn-danger ms-4'>Add </button>






    </div>
  )
}
