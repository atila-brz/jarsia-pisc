import BotaoAgendamento from "./BotaoAgendamento";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-texto">
          <span className="etiqueta">Psicologia e acolhimento</span>
          <h1>Um espaco seguro para cuidar de voce</h1>
          <p>
            Um espaco de escuta, acolhimento e reflexao para momentos importantes
            da sua trajetoria, com privacidade e postura profissional.
          </p>
          <div className="grupo-botoes">
            <BotaoAgendamento texto="Solicitar atendimento" destino="#contato" />
            <BotaoAgendamento
              texto="Conhecer a profissional"
              destino="#sobre"
              tipo="botao-secundario"
            />
          </div>
          <small>Atendimento sujeito a disponibilidade.</small>
        </div>

        <div className="foto-placeholder" aria-label="Espaco reservado para fotografia autorizada">
          <span>JM</span>
          <p>Fotografia profissional autorizada</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
