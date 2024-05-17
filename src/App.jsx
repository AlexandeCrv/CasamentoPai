import "./App.css";
import fogao from "./assets/fogao.png";
import gr from "./assets/gp.png";
import cc from "./assets/cc.png";
import af from "./assets/af.png";
import lq from "./assets/lq.png";
import sf from "./assets/sf.png";
import al from "./assets/al.png";

const coisas = [
  {
    nome: "Fogão",
    orçamentoMedio: "800 R$",
    descrição: "Fogão básico 4 bocas!",
    img: <img src={fogao} alt="" />,
  },
  {
    nome: "Guarda roupa",
    orçamentoMedio: "1500 R$",
    descrição: "Guarda roupa 6 portas!",
    img: <img src={gr} alt="" />,
  },
  {
    nome: "Cama box c/colchão",
    orçamentoMedio: "700 R$",
    descrição: "Cama box c/ colchão, o ideal é que seja uma maior!",
    img: <img src={cc} alt="" />,
  },
  {
    nome: "Ayr Fryer",
    orçamentoMedio: "450 R$",
    descrição: "Necessário pro dia a dia! ",
    img: <img src={af} alt="" />,
  },
  {
    nome: "Liquidificador",
    orçamentoMedio: "350 R$",
    descrição: "Um não tão simples que dure uns  anos!",
    img: <img src={lq} alt="" />,
  },
  {
    nome: "Sofá",
    orçamentoMedio: "900 R$",
    descrição: "Um sofá pequeno pra duas pessoas!",
    img: <img src={sf} alt="" />,
  },
];
function App() {
  return (
    <div>
      <header>
        <img className="ali" src={al} alt="" />
        <h1 className="h1i">Lista de itens necessária antes do casamento!</h1>
        <img className="ali2" src={al} alt="" />
      </header>
      <div className="principal">
        {coisas.map((coisa) => (
          <div>
            <div className="tamanho">
              <div className="coisan">{coisa.nome}</div>
            </div>

            <div className="tamanho">
              <div className="coisao">
                Orçamento médio {coisa.orçamentoMedio}
              </div>
            </div>
            <div className="tamanho">
              ,<div className="coisad"> {coisa.descrição}</div>
            </div>
            <div className="tamanho">
              <div className="coisai"> {coisa.img}</div>
              <hr />
            </div>
          </div>
        ))}
      </div>
      <footer>
        <h3>&copy; Feito por mim</h3>
      </footer>
    </div>
  );
}

export default App;
