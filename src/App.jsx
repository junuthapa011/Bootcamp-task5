import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const names = ['John','Syntell','Julie','Jacob','Jenny','Danny']
  return (
    <>
    <div className="head">
      
      <div className="main">
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[3]}</li>
        <li>{names[4]}</li>
        <li>{names[5]}</li>
      </div>
    </div>
    </>
  )
}

export default App
