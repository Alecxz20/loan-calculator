import heroImg from "../assets/loan-calculator.jpg"

export default function Hero({Link}) {
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
        <Link to="loanInput" spy={true} smooth={true} offset={50} duration={500}>
          <button className="hero__btn">Calcula tu préstamo</button>
        </Link>
      </div>
      <div className="right">
        <img src={heroImg} alt="desk with 2 laptops and a man writing on a paper" className="hero__img" />
      </div>
    </section>
  )
}
