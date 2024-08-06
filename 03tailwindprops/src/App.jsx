import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:'tvisha',
    age:20
  }
  return (
    <>
      <h1  className="bg-green-400 text-black p-4 rounded-xl mb-6">Tailwind test</h1>
      <Card username="techcrunch2" btnText={"Hit Me Up"}/>
      < Card username="techcrunch" someObje={myObj} btnText="Visit Me"/>



    </>
  )
}

export default App
