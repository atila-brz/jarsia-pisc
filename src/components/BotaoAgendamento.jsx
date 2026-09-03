function BotaoAgendamento({ texto, destino, tipo = "", onClick }) {
  const classe = tipo ? `botao ${tipo}` : "botao";

  return (
    <a className={classe} href={destino} onClick={onClick}>
      {texto}
    </a>
  );
}

export default BotaoAgendamento;
