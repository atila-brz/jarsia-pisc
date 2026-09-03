import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Compromissos from "./components/Compromissos";
import EtapasAtendimento from "./components/EtapasAtendimento";
import Beneficios from "./components/Beneficios";
import Depoimentos from "./components/Depoimentos";
import AprendizadoReact from "./components/AprendizadoReact";
import PerguntasFrequentes from "./components/PerguntasFrequentes";
import ChecklistPublicacao from "./components/ChecklistPublicacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Compromissos />
        <EtapasAtendimento />
        <Beneficios />
        <Depoimentos />
        <AprendizadoReact />
        <PerguntasFrequentes />
        <ChecklistPublicacao />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
