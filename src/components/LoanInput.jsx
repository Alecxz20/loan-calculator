import { useEffect, useState } from 'react'

export default function LoanInput({ amount, setAmount, months, setMonths }) {
  const [monthlyPayment, setMonthlyPayment] = useState('')
  const [disabledLink, setDisableLink] = useState(true)

  useEffect(() => {
    if (amount === '' && months === '') {
      setMonthlyPayment('')
      setDisableLink(true)
    }
  }, [amount, months])

  function onChangeAmount(event) {
    setAmount(event.target.value)
  }
  function onChangeMonths(event) {
    setMonths(event.target.value)
  }
  function onSubmitForm(event) {
    event.preventDefault()
    setDisableLink(false)
    const formula = (amount * 0.14) / (1 - Math.pow(1 + 0.14, -months))
    setMonthlyPayment(`${formula.toFixed(2)} $`)
  }

  function onReset() {
    setMonths('')
    setAmount('')
    setMonthlyPayment('')
    setDisableLink(true)
  }

  return (
    <form className="inputInfo" onSubmit={onSubmitForm} name="loanInput">
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
        <input
          type="text"
          className="card__input grayout"
          value="14%"
          disabled
        />

        <label htmlFor="months" className="card__text">
          Duración del préstamo / Meses
        </label>
        <input
          id="months"
          type="number"
          className="card__input"
          min={3}
          max={12}
          onChange={onChangeMonths}
          value={months}
          required
        />

        <label className="card__text">Cuota Mensual</label>
        <input
          type="text"
          className="card__input grayout"
          value={monthlyPayment}
          disabled
          style={{ fontWeight: 'bold' }}
        />

        <p className="smallText">
          *Esta es la cuota mínima que deberás pagar mensualmente
        </p>

        <button className="inputInfo__btn" type="submit">
          Calcular
        </button>

        <div className="grid__btns">
          <button
            type="button"
            className="inputInfo__btn inputInfo__btn-yellow"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <a
            target="_blank"
            href="https://www.somos.com.ve/requisitos-y-condiciones/"
            className={`inputInfo__btn inputInfo__btn-green ${
              disabledLink ? 'blocked' : ''
            } `}
          >
            Solicita tu Préstamo
          </a>
        </div>
      </div>
    </form>
  )
}
