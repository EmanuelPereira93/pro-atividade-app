import { useState } from "react";
import "./App.css";
import Atividade from "./components/Atividade";
import AtividadeForm from "./components/AtividadeForm";


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

  function prioridadeLabel(param){
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return " Não definido";
    }
  }

  function prioridadeStyle(param, icone){
    switch (param) {
      case "1":
        return icone ? "smile" : "success" ;
      case "2":
        return  icone ? "meh" : "dark";
      case "3":
        return  icone ? "frown" : "warning";
      default:
        return " Não definido";
    }
  }
  

  return (
    <>
      <AtividadeForm 
      addAtividade ={addAtividade}
      atividades={atividades}
       />
      <div className="mt-3">
        {atividades.map((ativ) => (
          <div key={ativ.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{ativ.id}</span>
                  {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={"ms-1 text-" + prioridadeStyle(ativ.prioridade)}>
                    <i className={"me-1 far fa-" + prioridadeStyle(ativ.prioridade,true)}></i>
                    {prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className="card-text">- {ativ.descricao}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2">
                  <i className="fas fa-pen me-2"></i>
                  Editar
                </button>
                <button 
                className="btn btn-outline-danger"
                 onClick={() => apagarAtividade(ativ.id)}>
                  <i className="fas fa-trash me-2"></i>
                  Apagar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
  ); 
}

export default App;
