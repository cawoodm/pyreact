import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ToDos from './Todos'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ToDos />
      <div className="card">
        <Btn></Btn>
      </div>
    </>
  )
}

function Btn() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default App
