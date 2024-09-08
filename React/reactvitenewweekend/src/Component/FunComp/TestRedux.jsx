import React from 'react'
import { useSelector } from 'react-redux'

export default function TestRedux() {
    const count =  useSelector((a)=> a.count)
  return (
    <div>
        <h1>Tets  {count}  ds</h1>
    </div>
  )
}
