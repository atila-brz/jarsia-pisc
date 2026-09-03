import CardInformativo from "./CardInformativo";
import { compromissos } from "../data/conteudo";

function Compromissos() {
  return (
    <section className="secao" id="compromissos">
      <div className="container">
        <p className="titulo-secao">Composicao com props</p>
        <h2>Compromissos apresentados em cards reutilizaveis</h2>
        <div className="grade-servicos">
          {compromissos.map((compromisso, indice) => (
            <CardInformativo
              key={compromisso.id}
              marcador={String(indice + 1).padStart(2, "0")}
              titulo={compromisso.titulo}
              texto={compromisso.texto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Compromissos;
