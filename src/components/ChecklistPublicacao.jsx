import { useState } from "react";
import { itensPublicacao } from "../data/conteudo";

function ChecklistPublicacao() {
  const [itensConcluidos, setItensConcluidos] = useState([]);

  function alternarItem(item) {
    setItensConcluidos((atuais) =>
      atuais.includes(item)
        ? atuais.filter((itemAtual) => itemAtual !== item)
        : [...atuais, item],
    );
  }

  const total = itensPublicacao.length;
  const concluidos = itensConcluidos.length;

  return (
    <section className="secao" id="checklist">
      <div className="container contato-grid">
        <div>
          <p className="titulo-secao">Estado e eventos</p>
          <h2>Checklist antes de publicar</h2>
          <p>
            Marque os itens conforme forem revisados. O contador usa estado para
            refletir o progresso sem recarregar a pagina.
          </p>
          <p className="mensagem-sucesso">
            {concluidos} de {total} itens conferidos.
          </p>
        </div>

        <div className="formulario">
          {itensPublicacao.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={itensConcluidos.includes(item)}
                onChange={() => alternarItem(item)}
              />{" "}
              {item}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChecklistPublicacao;
