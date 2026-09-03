import { useState } from "react";
import { conteudosReact } from "../data/conteudo";

function AprendizadoReact() {
  const [conteudoAtivo, setConteudoAtivo] = useState(conteudosReact[0].id);
  const conteudoSelecionado = conteudosReact.find((item) => item.id === conteudoAtivo);

  return (
    <section className="secao secao-clara" id="aprendizado">
      <div className="container contato-grid">
        <div>
          <p className="titulo-secao">Renderizacao condicional</p>
          <h2>Conceitos React aplicados na homepage</h2>
          <p>
            Cada botao altera o estado ativo. A explicacao exibida troca de
            conteudo usando dados, evento de clique e renderizacao condicional.
          </p>
          <div className="grupo-botoes">
            {conteudosReact.map((item) => (
              <button
                className={item.id === conteudoAtivo ? "botao" : "botao botao-secundario"}
                key={item.id}
                type="button"
                onClick={() => setConteudoAtivo(item.id)}
              >
                {item.titulo}
              </button>
            ))}
          </div>
        </div>

        {conteudoSelecionado && (
          <article className="card-servico">
            <span className="icone-servico" aria-hidden="true">
              RX
            </span>
            <h3>{conteudoSelecionado.titulo}</h3>
            <p>{conteudoSelecionado.texto}</p>
          </article>
        )}
      </div>
    </section>
  );
}

export default AprendizadoReact;
