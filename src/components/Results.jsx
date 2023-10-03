export default function Results({
  amount,
  months,
  setResults,
  setAmount,
  setMonths,
}) {
  const monthlyFee = (amount * 0.14) / (1 - Math.pow(1 + 0.14, -months))
  function onReset() {
    setResults(false)
    setMonths('')
    setAmount('')
  }
  return (
    <section className="results" name="loanResults">
      <h2 className="results__title">Resumen del Préstamo</h2>
      <div className="card card--yellow">
        <label className="card__text">Monto prestado</label>
        <input className="card__input" defaultValue={`${amount} $`} disabled />
        <label className="card__text">Cuota mensual</label>
        <input
          className="card__input"
          defaultValue={`${monthlyFee.toFixed(2)} $`}
          disabled
        />
        <label className="card__text">Número de pagos</label>
        <input
          className="card__input"
          defaultValue={`${months} pagos`}
          disabled
        />
        <label className="card__text">Total de interés a pagar</label>
        <input
          className="card__input"
          defaultValue={`${(monthlyFee * months - amount).toFixed(2)} $`}
          disabled
        />
        <div className="inputInfo__btn-box">
          <button type="button" className="inputInfo__btn" onClick={onReset}>
            Reiniciar
          </button>
          <a target="_blank" href="https://www.somos.com.ve/requisitos-y-condiciones/" className="inputInfo__btn inputInfo__btn-green">
            Proceder
          </a>
        </div>
      </div>
    </section>
  )
}
