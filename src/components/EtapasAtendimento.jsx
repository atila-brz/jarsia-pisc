import CardInformativo from "./CardInformativo";
import { etapasAtendimento } from "../data/conteudo";

function EtapasAtendimento() {
  return (
    <section className="secao secao-clara" id="etapas">
      <div className="container">
        <p className="titulo-secao">Lista com map</p>
        <h2>Fluxo demonstrativo de atendimento</h2>
        <div className="grade-beneficios">
          {etapasAtendimento.map((etapa) => (
            <CardInformativo
              key={etapa.id}
              marcador={String(etapa.id).padStart(2, "0")}
              titulo={etapa.titulo}
              texto={etapa.descricao}
              destaque={etapa.id === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EtapasAtendimento;
