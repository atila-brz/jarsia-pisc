function CardServico({ icone, titulo, descricao, modalidade, disponivel }) {
  return (
    <article className="card-servico">
      <span className="icone-servico" aria-hidden="true">
        {icone}
      </span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="card-rodape">
        <span className="modalidade">{modalidade}</span>
        <span className={disponivel ? "status disponivel" : "status indisponivel"}>
          {disponivel ? "Disponivel" : "Consulte disponibilidade"}
        </span>
      </div>
    </article>
  );
}

export default CardServico;
