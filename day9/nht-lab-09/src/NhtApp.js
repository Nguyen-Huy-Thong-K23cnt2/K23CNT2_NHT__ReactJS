import React from 'react'
import NhtUseState from './components/NhtUseState'
import NhtUseStateListObject from './components/NhtUseStateListObject'
import NhtUseEffect1 from './components/NhtUseEffect1'

export default function NhtApp() {
  return (
    <div className='container border mt-3'>
      <h1>React Hook</h1>
      <NhtUseState />
      <hr />
      <NhtUseStateListObject />
      <hr />
      <NhtUseEffect1 />
    </div>
  )
}