import { perguntasFrequentes } from "../data/conteudo";

function PerguntasFrequentes() {
  return (
    <section className="secao" id="perguntas">
      <div className="container perguntas-container">
        <p className="titulo-secao">Perguntas frequentes</p>
        <h2>Informacoes importantes antes da publicacao</h2>
        <div className="lista-perguntas">
          {perguntasFrequentes.map((item) => (
            <details className="pergunta" key={item.pergunta}>
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;
