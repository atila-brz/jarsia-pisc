function CardInformativo({ marcador, titulo, texto, destaque = false }) {
  return (
    <article className={destaque ? "card-servico beneficio" : "card-servico"}>
      <span className="icone-servico" aria-hidden="true">
        {marcador}
      </span>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  );
}

export default CardInformativo;
