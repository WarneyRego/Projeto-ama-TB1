import React from "react";
import AnamneseForm from './AnamneseForm';

const AnamnesePage = () => {
  return (
    <div>
      <h1>Formulário de Anamnese</h1>
      <AnamneseForm userRole="organizational" />
    </div>
  );
};

export default AnamnesePage;
