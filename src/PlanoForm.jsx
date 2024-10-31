// PlanoForm.jsx
import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const PlanoForm = () => {
  const [ra, setRa] = useState("");
  const [atividades, setAtividades] = useState("");
  const [nomeMedicacao, setNomeMedicacao] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [orientacoes, setOrientacoes] = useState("");
  const [observacaoAdmin, setObservacaoAdmin] = useState("");

  const db = getFirestore();

  const handlePlanoSubmit = async (e) => {
    e.preventDefault();

    const planoData = {
      atividades,
      nomeMedicacao,
      dosagem,
      frequencia,
      orientacoes,
      observacaoAdmin,
    };

    try {
      const planoDocRef = doc(db, "TB4_Plano", ra);
      await setDoc(planoDocRef, planoData);
      alert("Dados do Plano de Cuidado salvos com sucesso!");

      // Limpar os campos após o envio
      setRa("");
      setAtividades("");
      setNomeMedicacao("");
      setDosagem("");
      setFrequencia("");
      setOrientacoes("");
      setObservacaoAdmin("");
    } catch (error) {
      console.error("Erro ao salvar os dados do Plano: ", error);
    }
  };

  return (
    <form onSubmit={handlePlanoSubmit}>
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
        <label>Atividades:</label>
        <input
          type="text"
          value={atividades}
          onChange={(e) => setAtividades(e.target.value)}
          placeholder="Atividades"
          required
        />
      </div>
      <div>
        <label>Nome da Medicação:</label>
        <input
          type="text"
          value={nomeMedicacao}
          onChange={(e) => setNomeMedicacao(e.target.value)}
          placeholder="Nome da Medicação"
          required
        />
      </div>
      <div>
        <label>Dosagem:</label>
        <input
          type="text"
          value={dosagem}
          onChange={(e) => setDosagem(e.target.value)}
          placeholder="Dosagem"
          required
        />
      </div>
      <div>
        <label>Frequência:</label>
        <input
          type="text"
          value={frequencia}
          onChange={(e) => setFrequencia(e.target.value)}
          placeholder="Frequência"
          required
        />
      </div>
      <div>
        <label>Orientações:</label>
        <input
          type="text"
          value={orientacoes}
          onChange={(e) => setOrientacoes(e.target.value)}
          placeholder="Orientações"
        />
      </div>
      <div>
        <label>Observação Administrativa:</label>
        <input
          type="text"
          value={observacaoAdmin}
          onChange={(e) => setObservacaoAdmin(e.target.value)}
          placeholder="Observação Administrativa"
        />
      </div>
      <button type="submit">Salvar Plano</button>
    </form>
  );
};

export default PlanoForm;
