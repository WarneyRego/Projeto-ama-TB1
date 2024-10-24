import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

const ViewAnamnese = () => {
  const [anamneses, setAnamneses] = useState([]);
  const [selectedAnamnese, setSelectedAnamnese] = useState(null);
  const [editData, setEditData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchAnamneses = async () => {
      const querySnapshot = await getDocs(collection(db, "TB2_Anamnese_Medica"));
      const anamnesesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAnamneses(anamnesesData);
    };

    fetchAnamneses();
  }, [db]);

  const handleSelectAnamnese = (anamnese) => {
    setSelectedAnamnese(anamnese);
    setEditData(anamnese); // Preenche o formulário com os dados selecionados
  };

  const handleUpdateAnamnese = async () => {
    try {
      const docRef = doc(db, "TB2_Anamnese_Medica", selectedAnamnese.id);
      await updateDoc(docRef, editData);
      alert("Anamnese atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar a anamnese: ", error);
    }
  };

  return (
    <div>
      <h1>Visualizar e Editar Anamneses</h1>

      <ul>
        {anamneses.map((anamnese) => (
          <li key={anamnese.id}>
            {anamnese.ra} - {anamnese.queixas}
            <button onClick={() => handleSelectAnamnese(anamnese)}>Editar</button>
          </li>
        ))}
      </ul>

      {selectedAnamnese && (
        <div>
          <h2>Editando Anamnese de {selectedAnamnese.ra}</h2>
          <form>
            <div>
              <label>Queixas:</label>
              <input
                type="text"
                value={editData.queixas}
                onChange={(e) => setEditData({ ...editData, queixas: e.target.value })}
              />
            </div>
            <div>
              <label>Histórico Pessoal:</label>
              <input
                type="text"
                value={editData.historicoPessoal}
                onChange={(e) => setEditData({ ...editData, historicoPessoal: e.target.value })}
              />
            </div>
            <div>
              <label>Histórico Familiar:</label>
              <input
                type="text"
                value={editData.historicoFamiliar}
                onChange={(e) => setEditData({ ...editData, historicoFamiliar: e.target.value })}
              />
            </div>
            {/* Adicionar o resto dos campos da  anamnese aqui */}

            <button type="button" onClick={handleUpdateAnamnese}>Salvar Alterações</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewAnamnese;
