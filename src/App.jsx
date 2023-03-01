import { useState } from 'react'
import FortuneCard from './components/FortuneCard'
import phrases from './data/phrases.json'
import PrincipalTitle from './components/principalTitle'
import './App.css'

function App() {
  const [indexPhrases, setIndexPhrases] = useState(0)

  const fortuneChange =() => {
    setIndexPhrases(Math.floor(Math.random() *phrases.length))    
  }
  const Background = [1,2,3,4]

  const [indexBackground, setIndexBackground] = useState(0)

  const backgroundChange = () => {
    if(indexBackground === Background.length -1) {
      setIndexBackground(0);
      } 
      else {
        setIndexBackground(indexBackground +1);
    }
  }

  return (
    <div className="App" style = {{backgroundImage: "url('fondo"+Background[indexBackground]+".png')"}} >

      <PrincipalTitle/>

      <FortuneCard 
        fortuneData={phrases[indexPhrases]}
         />
      <button className='button' onClick ={() => {fortuneChange(),backgroundChange()}}> De nuevo </button>

    </div>
    
  )
}

export default App
