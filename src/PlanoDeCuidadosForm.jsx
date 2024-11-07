

import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Navbar from "./elements/Navbar";
const PlanoDeCuidadosForm = () => {
  const [nome, setNome] =  useState("");

  const [ra, setRa] = useState("");
  const [atividades, setAtividades] = useState("");
  const [nomesDaMedicação, setNomesDaMedicação] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [frequência, setFrequência] = useState("");
  const [orientações, setOrientações] = useState("");
  const [observaçãoAdministrativa, setObservaçãoAdministrativa] = useState("");

  const db = getFirestore();

  const handlePlanoDeCuidadosSubmit = async (e) => {
    e.preventDefault();

    const planoDeCuidadosData = {
      nome,
      atividades,
      nomesDaMedicação,
      dosagem,
      frequência,
      orientações,
      observaçãoAdministrativa,
    };

    try {
      // O documento é salvo com o RA como ID (NÃO VAI SER ALEATÓRIO)
      const planoDeCuidadosDocRef = doc(db, "TB4_PlanoDeCuidados", ra);
      await setDoc(planoDeCuidadosDocRef, planoDeCuidadosData);
      alert("Dados do Plano de Cuidados salvos com sucesso!");
      // Limpar os campos após o envio
      setNome("");
      setRa("");
      setAtividades("");
      setNomesDaMedicação("");
      setDosagem("");
      setFrequência("");
      setOrientações("");
      setObservaçãoAdministrativa("");
    } catch (error) {
      console.error("Erro ao salvar os dados do Plano de Cuidados: ", error);
    }
  };

  return (
    <>
     

    <div className="tabela">
      <div className="painel">
    <form className="formu" onSubmit={handlePlanoDeCuidadosSubmit}>
       <div>
     
        <input
        className="itemz"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do paciente"
          required
        />
      </div>
      <div>
        
        <input
        className="itemz"
          type="text"
          value={ra}
          onChange={(e) => setRa(e.target.value)}
          placeholder="RA do paciente"
          required
        />
      </div>
      <div>
      
        <input
        className="itemz"
          type="text"
          value={atividades}
          onChange={(e) => setAtividades(e.target.value)}
          placeholder="Atividades"
          required
        />
      </div>
      <div>
        
        <input
        className="itemz"
          type="text"
          value={nomesDaMedicação}
          onChange={(e) => setNomesDaMedicação(e.target.value)}
          placeholder="Nomes da Medicação"
          required
        />
      </div>
      <div>
       
        <input
        className="itemz"
          type="text"
          value={dosagem}
          onChange={(e) => setDosagem(e.target.value)}
          placeholder="Dosagem"
          required
        />
      </div>
      <div>
     
        <input className="itemz"
          type="text"
          value={frequência}
          onChange={(e) => setFrequência(e.target.value)}
          placeholder="Frequência"
        />
      </div>
      <div>
      
        <input
        className="itemz"
          type="text"
          value={orientações}
          onChange={(e) => setOrientações(e.target.value)}
          placeholder="Orientações"
        />
      </div>
      <div>
        
        <input className="itemz"
          type="text"
          value={observaçãoAdministrativa}
          onChange={(e) => setObservaçãoAdministrativa(e.target.value)}
          placeholder="Observação Administrativa"
        />
      </div>
      <button className="btn" type="submit">Salvar Plano de Cuidados</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default PlanoDeCuidadosForm;