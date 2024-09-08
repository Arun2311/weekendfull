import React, { useContext } from 'react'
import { CartContextApi } from '../../context/CartContextApi'

export default function TestComp() {

    const {count} =  useContext(CartContextApi)
  return (
    <div>TestComp
        <h1>{count}</h1>
    </div>
  )
}
