import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Checkbox } from '@nextui-org/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Checkbox>Selected</Checkbox>
    </>
  )
}

export default App
