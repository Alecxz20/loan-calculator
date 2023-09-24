import { useState } from 'react'
import Hero from './components/Hero'
import LoanInput from './components/LoanInput'
import Results from './components/Results'

function App() {
  const [amount, setAmount] = useState('')
  const [months, setMonths] = useState('')
  const [results, setResults] = useState(false)

  return (
    <>
      <Hero />
      <LoanInput
        amount={amount}
        setAmount={setAmount}
        months={months}
        setMonths={setMonths}
        setResults={setResults}
      />
      {results ? (
        <Results
          setResults={setResults}
          amount={Number(amount)}
          months={Number(months)}
        />
      ) : (
        false
      )}
    </>
  )
}

export default App
