// Aqui é a parte de envio da avaliação neuropsicológica
import Navbar from "./elements/Navbar";
import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const AvNeuropsicologicaForm = () => {
  const [ra, setRa] = useState("");
  const [listaTeste, setListaTeste] = useState("");
  const [resultados, setResultados] = useState("");
  const [observacaoAdministrativa, setObservacaoAdministrativa] = useState("");

  const db = getFirestore();

  const handleAvNeuropsicologicaSubmit = async (e) => {
    e.preventDefault();

    const AvNeuropsicologicaData = {
      listaTeste,
      resultados,
      observacaoAdministrativa,
    };

    try {
      // O documento é salvo com o RA como ID (NÃO VAI SER ALEATORIO)
      const AvNeuropsicologicaDocRef = doc(db, "TB3_Avaliação_Neuropsicológica", ra);
      await setDoc(AvNeuropsicologicaDocRef, AvNeuropsicologicaData);
      alert("Dados da Avaliação Neuropsicologica salvos com sucesso!");
      // Limpar os campos após o envio
      setRa("");
      setListaTeste("");
      setResultados("");
      setObservacaoAdministrativa("");
    } catch (error) {
      console.error("Erro ao salvar os dados da Avaliação Neuropsicologica: ", error);
    }
  };

  return (
    <>
   <Navbar/>
   <nav><h1>Criação de avaliações neuropsicologicas</h1></nav>
      <div className="tabela">
    <div className="painel"> 
    <form className="formu" onSubmit={handleAvNeuropsicologicaSubmit}>
      <div>
        <label>RA (Registro Acadêmico):</label>
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
        <label>Lista de Testes:</label>
        <input
        className="itemz"
          type="text"
          value={listaTeste}
          onChange={(e) => setListaTeste(e.target.value)}
          placeholder="Lista de Testes"
          required
        />
      </div>
      <div>
        <label>Resultados:</label>
        <input
        className="itemz"
          type="text"
          value={resultados}
          onChange={(e) => setResultados(e.target.value)}
          placeholder="Resultados"
          required
        />
      </div>
      <div>
        <label>Observação Administrativa:</label>
        <input
        className="itemz"
          type="text"
          value={observacaoAdministrativa}
          onChange={(e) => setObservacaoAdministrativa(e.target.value)}
          placeholder="Observação Administrativa"
        />
      </div>
      <button className="btno" type="submit"><p>Criar Avaliação</p></button>
    </form>
    </div>
    </div>
    </>
  );
};

export default AvNeuropsicologicaForm;
