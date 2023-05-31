import { Calculator } from './components/Calculator'
import { Record } from './components/Record'
import { NavBar } from './components/NavBar'
import { useState } from 'react'

function App() {
  const [resultsList, setResultsList] = useState([]);
  return (
    <>
      <NavBar/>
      <div className='m-5 mt-16 flex flex-col items-center
        md:flex-row md:justify-evenly md:items-start'>
        <Calculator resultsList={resultsList} setResultsList={setResultsList}/>
        <Record resultsList={resultsList} setResultsList={setResultsList}/>
      </div>
    </>
  )
}

export default App
