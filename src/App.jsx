import { useState } from 'react'
import Hero from './components/Hero'
import LoanInput from './components/LoanInput'
import Results from './components/Results'
import { Link } from 'react-scroll'

function App() {
  const [amount, setAmount] = useState('')
  const [months, setMonths] = useState('')
  const [results, setResults] = useState(false)

  return (
    <>
      <Hero Link={Link}/>
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
          setAmount={setAmount}
          setMonths={setMonths}
        />
      ) : (
        false
      )}
    </>
  )
}

export default App
