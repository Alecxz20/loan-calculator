import { useState } from 'react'
import LoanInput from './components/LoanInput'

function App() {
  const [amount, setAmount] = useState('')
  const [months, setMonths] = useState('')

  return (
    <>
      <LoanInput
        amount={amount}
        setAmount={setAmount}
        months={months}
        setMonths={setMonths}
      />
    </>
  )
}

export default App
