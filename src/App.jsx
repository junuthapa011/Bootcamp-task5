import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const names = ['John','Syntell','Julie','Jacob','Jenny','Danny']
  return (
    <>
    <div className="header"><h2>CSS Styling and JS Variables in React Project</h2></div>
    <nav>
      <ul>
       <li><a href = "index.html">Home</a></li>
       <li><a href = "index.html">Menu</a></li>
       <li><a href = "index.html">Shop</a></li>
      </ul>
    </nav>
    
    
  <div className ="background">
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
    </div>

    <div className="footer">
    <footer>Copyright &copy; 2023 </footer>
    </div>
    </>
  )
}

export default App
