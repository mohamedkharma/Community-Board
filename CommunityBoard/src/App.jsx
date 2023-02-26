import { useState } from 'react'
// import travel from './assets/travel.png'
import './App.css'
import Places from './components/Places'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Header">
        {/* <img src={travel} alt="Description of the image" /> */}
        <h1>Places to Visit in NYC &#x1F303;</h1>
      </div>
      <Places />
    </div>
  )
}

export default App
