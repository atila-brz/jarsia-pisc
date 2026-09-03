function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-conteudo">
        <strong>Jarsia Melo - Psicologia</strong>
        <p>Informacoes institucionais sujeitas a confirmacao profissional.</p>
        <p>CRP: [confirmar] | (c) {anoAtual} - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
