import { useState } from "react";

function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();
    setMensagemEnviada(true);
    evento.target.reset();
  }

  function limparMensagem() {
    setMensagemEnviada(false);
  }

  return (
    <section className="secao" id="contato">
      <div className="container contato-grid">
        <div>
          <p className="titulo-secao">Contato</p>
          <h2>Vamos conversar?</h2>
          <p>Preencha os campos para testar a experiencia do formulario.</p>
          <p>
            <strong>Telefone e e-mail: [confirmar contatos profissionais]</strong>
          </p>
          <p className="nota-etica">
            Este formulario e apenas demonstrativo. Para enviar dados realmente,
            ele devera ser conectado a um backend ou servico de formulario.
          </p>
        </div>

        <form className="formulario" onSubmit={enviarFormulario}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" required />

          <label htmlFor="contato-campo">Telefone ou e-mail</label>
          <input id="contato-campo" name="contato" type="text" required />

          <label htmlFor="mensagem">Mensagem inicial</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

          <button className="botao" type="submit">
            Enviar solicitacao
          </button>

          {mensagemEnviada && (
            <div className="mensagem-sucesso">
              <p>Solicitacao demonstrativa registrada na interface.</p>
              <button className="botao botao-secundario" type="button" onClick={limparMensagem}>
                Limpar mensagem
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;
