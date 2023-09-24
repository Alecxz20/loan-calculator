import heroImg from "../assets/loan-calculator.jpg"

export default function Hero() {
  return (
    <section className="hero">
      <div className="left">
        <h1 className="hero__title">
          Calculadora y simulador de préstamos personales
        </h1>
        <p className="hero__text">
          simulador de préstamos muestra cuánto dinero pagas en capital e
          intereses con el tiempo. Usa esta calculadora para ver cómo esos pagos
          se desglosan durante el plazo de tu préstamo.
        </p>
        <button className="hero__btn">Calcula tu préstamo</button>
      </div>
      <div className="right">
        <img src={heroImg} alt="desk with 2 laptops and a man writing on a paper" className="hero__img" />
      </div>
    </section>
  )
}
