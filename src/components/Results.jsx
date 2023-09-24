export default function Results({ amount, months, setResults }) {
  const monthlyFee = (amount * 0.14) / (1 - Math.pow(1 + 0.14, -months))
  function onReset() {
    setResults(false)
  }
  return (
    <section className="results">
      <h2 className="results__title">Resumen de la financiación</h2>
      <div className="card card--yellow">
        <label className="card__text">Monto prestado</label>
        <input className="card__input" defaultValue={`${amount} $`} disabled />
        <label className="card__text">Cuota mensual</label>
        <input className="card__input" defaultValue={`${monthlyFee.toFixed(2)} $`} disabled />
        <label className="card__text">Número de pagos</label>
        <input className="card__input" defaultValue={`${months} pagos`} disabled />
        <label className="card__text">Total de interés a pagar</label>
        <input className="card__input" defaultValue={`${((monthlyFee * months) - amount).toFixed(2)} $`} disabled />
        <button type="button" className="inputInfo__btn" onClick={onReset} >Reiniciar</button>
      </div>
    </section>
  )
}