// Aqui é a parte de envio da anamnese

import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const AnamneseForm = () => {
  const [ra, setRa] = useState("");
  const [queixas, setQueixas] = useState("");
  const [historicoPessoal, setHistoricoPessoal] = useState("");
  const [historicoFamiliar, setHistoricoFamiliar] = useState("");
  const [selecaoQueixasComuns, setSelecaoQueixasComuns] = useState("");
  const [historicoPreDefinido, setHistoricoPreDefinido] = useState("");
  const [observacaoAdministrativa, setObservacaoAdministrativa] = useState("");

  const db = getFirestore();

  const handleAnamneseSubmit = async (e) => {
    e.preventDefault();

    const anamneseData = {
      queixas,
      historicoPessoal,
      historicoFamiliar,
      selecaoQueixasComuns,
      historicoPreDefinido,
      observacaoAdministrativa,
    };

    try {
      // O documento é salvo com o RA como ID (NÃO VAI SER ALEATORIO)
      const anamneseDocRef = doc(db, "TB2_Anamnese_Medica", ra);
      await setDoc(anamneseDocRef, anamneseData);
      alert("Dados da Anamnese salvos com sucesso!");
      // Limpar os campos após o envio
      setRa("");
      setQueixas("");
      setHistoricoPessoal("");
      setHistoricoFamiliar("");
      setSelecaoQueixasComuns("");
      setHistoricoPreDefinido("");
      setObservacaoAdministrativa("");
    } catch (error) {
      console.error("Erro ao salvar os dados da Anamnese: ", error);
    }
  };

  return (
    <form onSubmit={handleAnamneseSubmit}>
      <div>
        <label>RA (Registro Acadêmico):</label>
        <input
          type="text"
          value={ra}
          onChange={(e) => setRa(e.target.value)}
          placeholder="RA do paciente"
          required
        />
      </div>
      <div>
        <label>Queixas:</label>
        <input
          type="text"
          value={queixas}
          onChange={(e) => setQueixas(e.target.value)}
          placeholder="Queixas"
          required
        />
      </div>
      <div>
        <label>Histórico Pessoal:</label>
        <input
          type="text"
          value={historicoPessoal}
          onChange={(e) => setHistoricoPessoal(e.target.value)}
          placeholder="Histórico Pessoal"
          required
        />
      </div>
      <div>
        <label>Histórico Familiar:</label>
        <input
          type="text"
          value={historicoFamiliar}
          onChange={(e) => setHistoricoFamiliar(e.target.value)}
          placeholder="Histórico Familiar"
          required
        />
      </div>
      <div>
        <label>Seleção de Queixas Comuns:</label>
        <input
          type="text"
          value={selecaoQueixasComuns}
          onChange={(e) => setSelecaoQueixasComuns(e.target.value)}
          placeholder="Seleção de Queixas Comuns"
        />
      </div>
      <div>
        <label>Histórico Pré-definido:</label>
        <input
          type="text"
          value={historicoPreDefinido}
          onChange={(e) => setHistoricoPreDefinido(e.target.value)}
          placeholder="Histórico Pré-definido"
        />
      </div>
      <div>
        <label>Observação Administrativa:</label>
        <input
          type="text"
          value={observacaoAdministrativa}
          onChange={(e) => setObservacaoAdministrativa(e.target.value)}
          placeholder="Observação Administrativa"
        />
      </div>
      <button type="submit">Salvar Anamnese</button>
    </form>
  );
};

export default AnamneseForm;
