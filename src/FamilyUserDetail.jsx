//vai exibir as informações do user, depois de escolher
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const FamilyUserDetail = () => {
  const { id } = useParams(); 
  const [userDetails, setUserDetails] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDocRef = doc(db, "TB1_Pessoas_com_TEA", id);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setUserDetails(userDocSnap.data());
      } else {
        console.log("Documento não encontrado!");
      }
    };

    fetchUserDetails();
  }, [db, id]);

  if (!userDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes do Usuário Familiar</h1>
      <p><strong>RA:</strong> {userDetails.ra}</p>
      <p><strong>Status:</strong> {userDetails.status}</p>
      <p><strong>Nome:</strong> {userDetails.nome}</p>
      <p><strong>Data de Nascimento:</strong> {userDetails.dataNascimento}</p>
      <p><strong>Diagnóstico:</strong> {userDetails.diagnostico}</p>
      <p><strong>Responsável:</strong> {userDetails.responsavel}</p>
      <p><strong>Contato:</strong> {userDetails.contato}</p>
      <p><strong>Gestação:</strong> {userDetails.gestacao}</p>
      <p><strong>Parto:</strong> {userDetails.parto}</p>
      <p><strong>Desenvolvimento Inicial:</strong> {userDetails.desenvolvimentoInicial}</p>
      <p><strong>Alergias:</strong> {userDetails.alergias}</p>
      <p><strong>Medicações:</strong> {userDetails.medicacoes}</p>
      <p><strong>Observação Administrativa:</strong> {userDetails.observacaoAdministrativa}</p>
    </div>
  );
};

export default FamilyUserDetail;
