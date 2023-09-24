export default function LoanInput({ amount, setAmount, months, setMonths, setResults }) {
  function onChangeAmount(event) {
    setAmount(event.target.value)
  }
  function onChangeMonths(event) {
    setMonths(event.target.value)
  }
  function onSubmitForm(event) {
    event.preventDefault()
    setResults(true)
    //To do: Calculations
    setAmount("")
    setMonths("")
  }
  return (
    <form className="inputInfo" onSubmit={onSubmitForm}>
      <h2 className="inputInfo__title">Calculadora de cuotas del préstamo</h2>
      <div className="card">
        <label htmlFor="loanAmount" className="card__text">
          Cantidad del préstamo
        </label>
        <input
          id="loanAmount"
          type="number"
          className="card__input"
          value={amount}
          required
          onChange={onChangeAmount}
          min={50}
          max={2000}
        />

        <label className="card__text">% de interes mensual</label>
        <input type="text" className="card__input" value="14 %" disabled />

        <label htmlFor="months" className="card__text">
          Duración del préstamo
        </label>
        <input
          id="months"
          type="number"
          className="card__input"
          min={3}
          max={12}
          onChange={onChangeMonths}
          value={months}
        />

        <button className="inputInfo__btn" type="submit">
          Calcular
        </button>
      </div>
    </form>
  )
}
