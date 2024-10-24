import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const FamilyDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [showInfo, setShowInfo] = useState(false); 
  const db = getFirestore();
  const user = getAuth().currentUser; 

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "TB1_Pessoas_com_TEA", user.uid); 
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          console.log("Documento não encontrado!");
        }
      }
    };

    fetchUserData();
  }, [user, db]);

  const handleToggleInfo = () => {
    setShowInfo((prev) => !prev); 
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Painel do Usuário Familiar</h1>
      <button onClick={handleToggleInfo}>
        {showInfo ? "Ocultar Informações" : "Mostrar Informações"}
      </button>
      
      {showInfo && (
        <div>
          <p><strong>RA:</strong> {userData.ra}</p>
          <p><strong>Status:</strong> {userData.status}</p>
          <p><strong>Nome:</strong> {userData.nome}</p>
          <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
          <p><strong>Diagnóstico:</strong> {userData.diagnostico}</p>
          <p><strong>Responsável:</strong> {userData.responsavel}</p>
          <p><strong>Contato:</strong> {userData.contato}</p>
          <p><strong>Gestação:</strong> {userData.gestacao}</p>
          <p><strong>Parto:</strong> {userData.parto}</p>
          <p><strong>Desenvolvimento Inicial:</strong> {userData.desenvolvimentoInicial}</p>
          <p><strong>Alergias:</strong> {userData.alergias}</p>
          <p><strong>Medicações:</strong> {userData.medicacoes}</p>
          <p><strong>Observação Administrativa:</strong> {userData.observacaoAdministrativa}</p>
        </div>
      )}
    </div>
  );
};

export default FamilyDashboard;
