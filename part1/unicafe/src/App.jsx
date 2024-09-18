import { useState } from 'react'
import { Header } from './components/Header'
import { Butons } from './components/Butons'
import { Statics } from './components/Statics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClicGood = () => {
    setGood(good + 1)
  }
  const handleClicNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClicBad = () => {
    setBad(bad + 1)
  }

  const all = () => good + neutral + bad

  const average = () => (good - bad) / all()

  const averagePos = () => good / all()

  return (
    <>
      <Header />

      <Butons
        handleClicGood={handleClicGood}
        handleClicNeutral={handleClicNeutral}
        handleClicBad={handleClicBad} 
      />



      <Statics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all()}
        average={average()}
        averagePos={averagePos()}
      />
    </>
  )
}

export default App