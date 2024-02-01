// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './Routing'
import Header from './Component/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
