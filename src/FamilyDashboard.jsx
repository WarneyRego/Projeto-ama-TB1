import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const FamilyDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [anamneseData, setAnamneseData] = useState(null); // Para dados da Tb2
  const [showInfo, setShowInfo] = useState(false); 
  const [showAnamnese, setShowAnamnese] = useState(false); // Para controlar quando vai exibir os dados da tb2
  const [avNeuropsicologicaData, setAvNeuropsicologicaData] = useState(null); // Para dados da Tb3
  const [showAvNeuropsicologica, setShowAvNeuropsicologica] = useState(false); // Para controlar quando vai exibir os dados da tb3
  const db = getFirestore();
  const user = getAuth().currentUser; 

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        // Buscar dados da TB1 
        const userDocRef = doc(db, "TB1_Pessoas_com_TEA", user.uid); 
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());

          // Vai usar o RA obtido da TB1 para buscar os dados da TB2 
          const ra = userDocSnap.data().ra;
          const anamneseDocRef = doc(db, "TB2_Anamnese_Medica", ra); // Usando o RA para a busca
          const anamneseDocSnap = await getDoc(anamneseDocRef);
          if (anamneseDocSnap.exists()) {
            setAnamneseData(anamneseDocSnap.data());
          } else {
            console.log("Nenhum dado encontrado na tabela Anamnese Médica!");
          }
        } else {
          console.log("Documento da TB1 não encontrado!");
        }

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());

          // Vai usar o RA obtido da TB1 para buscar os dados da TB3 
          const ra = userDocSnap.data().ra;
          const avNeuropsicologicaDocRef = doc(db, "TB3_Avaliação_Neuropsicológica", ra); // Usando o RA para a busca
          const avNeuropsicologicaDocSnap = await getDoc(avNeuropsicologicaDocRef);
          if (avNeuropsicologicaDocSnap.exists()) {
            setAvNeuropsicologicaData(avNeuropsicologicaDocSnap.data());
          } else {
            console.log("Nenhum dado encontrado na tabela Avaliação Neuropsicológica!");
          }
        } else {
          console.log("Documento da TB1 não encontrado!");
        }
      }
    };

    fetchUserData();
  }, [user, db]);

  const handleToggleInfo = () => {
    setShowInfo((prev) => !prev); 
  };

  const handleToggleAnamnese = () => {
    setShowAnamnese((prev) => !prev); 
  };

  const handleToggleAvNeuropsicologica = () => {
    setShowAvNeuropsicologica((prev) => !prev); 
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Painel do Usuário Familiar</h1>
      
      {/* Botão para mostrar/ocultar informações da TB1 (RESUMINDO: TOGGLE) */}
      <button onClick={handleToggleInfo}>
        {showInfo ? "Ocultar Informações Pessoais" : "Mostrar Informações Pessoais"}
      </button>
      
      {/* Exibir informações da TB1 - Pessoas com TEA */}
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

        </div>
      )}

      {/* Botão para mostrar/ocultar informações da TB2 (RESUMINDO: TOGGLE) */}
      {anamneseData && (
        <button onClick={handleToggleAnamnese}>
          {showAnamnese ? "Ocultar Anamnese Médica" : "Mostrar Anamnese Médica"}
        </button>
      )}

      {/* Exibir informações da TB2 - Anamnese Médica */}
      {showAnamnese && anamneseData && (
        <div>
          <h2>Anamnese Médica</h2>
          <p><strong>RA:</strong> {anamneseData.ra}</p>
          <p><strong>Queixas:</strong> {anamneseData.queixas}</p>
          <p><strong>Histórico Pessoal:</strong> {anamneseData.historicoPessoal}</p>
          <p><strong>Histórico Familiar:</strong> {anamneseData.historicoFamiliar}</p>
          <p><strong>Seleção de Queixas Comuns:</strong> {anamneseData.selecaoQueixas}</p>
          <p><strong>Histórico Pré-definido:</strong> {anamneseData.historicoPreDefinido}</p>

        </div>
      )}

      {/* Botão para mostrar/ocultar informações da TB3 (RESUMINDO: TOGGLE) */}
      {anamneseData && (
        <button onClick={handleToggleAvNeuropsicologica}>
          {showAnamnese ? "Ocultar Avaliação Neuropsicológica" : "Mostrar Avaliação Neuropsicológica"}
        </button>
      )}

      {/* Exibir informações da TB3 - Avaliação Neuropsicológica */}
      {showAvNeuropsicologica && avNeuropsicologicaData && (
        <div>
          <h2>Avaliação Neuropsicológica</h2>
          <p><strong>RA:</strong> {avNeuropsicologicaData.ra}</p>
          <p><strong>Lista Teste:</strong> {avNeuropsicologicaData.listaTeste}</p>
          <p><strong>Resultados:</strong> {avNeuropsicologicaData.resultados}</p>

        </div>
      )}
    </div>
  );
};

export default FamilyDashboard;
