function Sobre() {
  return (
    <section className="secao" id="sobre">
      <div className="container sobre-grid">
        <div>
          <p className="titulo-secao">Sobre</p>
          <h2>Psicologa Jarsia Melo</h2>
          <p>
            A proposta desta homepage e apresentar um espaco de escuta,
            acolhimento e reflexao, respeitando a singularidade de cada pessoa.
          </p>
          <p>
            <strong>CRP: [confirmar numero profissional]</strong>
          </p>
        </div>

        <aside className="quadro-compromissos" aria-label="Compromissos do atendimento">
          <h3>Compromissos do atendimento</h3>
          <ul>
            <li>Escuta profissional</li>
            <li>Respeito</li>
            <li>Sigilo</li>
            <li>Atendimento agendado</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Sobre;
