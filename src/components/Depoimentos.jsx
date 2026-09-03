import { depoimentos } from "../data/conteudo";

function Depoimentos() {
  return (
    <section className="secao secao-clara" id="depoimentos">
      <div className="container">
        <p className="titulo-secao">Depoimentos demonstrativos</p>
        <h2>Exemplos para estudar a interface</h2>
        <p className="aviso-ficticio">
          Os textos exibidos nesta secao sao ficticios e possuem finalidade
          exclusivamente didatica.
        </p>
        <div className="grade-depoimentos">
          {depoimentos.map((depoimento) => (
            <blockquote key={depoimento}>{depoimento}</blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
