import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/CounterEX1'
import NewsHeadline from './components/Ex2/NewsHeadline'
import InputList from './components/Ex3/InputList'
import SimpleForm from './components/Ex4/SimpleForm'
import InputControlado from './components/Ex5/InputControlado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <NewsHeadline/>
      <InputList/>
      <SimpleForm/>
      <InputControlado/>
    </>
  )
}

export default App
