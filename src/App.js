import { useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";


let initialState = [
  {
    id: 1,
    prioridade: "1",
    titulo: "Título",
    descricao: "Primeira Atividade",
  },
  {
    id: 2,
    prioridade: "2",
    titulo: "Título",
    descricao: "Segunda Atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };
    setAtividades([...atividades, { ...atividade }]);
  }

  function apagarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividades => atividades.id !== id );
    setAtividades([...atividadesFiltradas])
  }

  return (
    <>
      <AtividadeForm 
      addAtividade ={addAtividade}
      atividades={atividades}
       />
      <AtividadeLista 
      apagarAtividade ={apagarAtividade}
      atividades={atividades} />
      </>
  ); 
}

export default App;
