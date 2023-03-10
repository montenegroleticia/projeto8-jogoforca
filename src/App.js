import { useState } from "react";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import Chute from "./Components/Chute";

import "./styles/reset.css";
import "./styles/style.css";

import forca0 from "./assets/forca0.png";

export default function App() {
  const [palavraEscondida, setPalavraEscondida] = useState([]);
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [letrasCertas, setLetrasCertas] = useState(palavraEscondida);
  const [ganhou, setGanhou] = useState("");
  const [perdeu, setPerdeu] = useState(forca0);
  const [contador, setContador] = useState(0);
  const [palavraMostrada, setPalavraMostrada] = useState([]);
  const [state, setState] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [palavraSemCaracteres, setPalavraSemCaracteres] = useState([]);

  return (
    <>
      <Jogo
        image={perdeu}
        setPalavraEscondida={setPalavraEscondida}
        setLetrasClicadas={setLetrasClicadas}
        setLetrasCertas={setLetrasCertas}
        setGanhou={setGanhou}
        ganhou={ganhou}
        setPerdeu={setPerdeu}
        setContador={setContador}
        setPalavraMostrada={setPalavraMostrada}
        palavraMostrada={palavraMostrada}
        setState={setState}
        setPalavraSemCaracteres={setPalavraSemCaracteres}
      />

      <Letras
        state={state}
        palavraEscondida={palavraEscondida}
        setLetrasClicadas={setLetrasClicadas}
        letrasClicadas={letrasClicadas}
        setLetrasCertas={setLetrasCertas}
        letrasCertas={letrasCertas}
        setGanhou={setGanhou}
        setPerdeu={setPerdeu}
        setContador={setContador}
        contador={contador}
        setState={setState}
        setPalavraMostrada={setPalavraMostrada}
        palavraMostrada={palavraMostrada}
        palavraSemCaracteres={palavraSemCaracteres}
      />

      <Chute
        palavraEscondida={palavraEscondida}
        setPesquisa={setPesquisa}
        pesquisa={pesquisa}
        setPalavraMostrada={setPalavraMostrada}
        palavraMostrada={palavraMostrada}
        setGanhou={setGanhou}
        setState={setState}
        state={state}
        setPerdeu={setPerdeu}
        palavraSemCaracteres={palavraSemCaracteres}
      />
    </>
  );
}
