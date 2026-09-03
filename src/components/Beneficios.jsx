import { beneficios } from "../data/conteudo";

function Beneficios() {
  return (
    <section className="secao" id="beneficios">
      <div className="container">
        <p className="titulo-secao">Beneficios</p>
        <h2>Uma experiencia planejada com cuidado</h2>
        <div className="grade-beneficios">
          {beneficios.map((beneficio, indice) => (
            <article className="beneficio" key={beneficio}>
              <span>{String(indice + 1).padStart(2, "0")}</span>
              <p>{beneficio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
