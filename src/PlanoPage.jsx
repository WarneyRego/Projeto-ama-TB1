import React from "react";
import PlanoForm from './PlanoForm.jsx';

const PlanoPage = () => {
  return (
    <div>
      <h1>Formulário de Plano</h1>
      <PlanoForm userRole="organizational" />
    </div>
  );
};

export default PlanoPage;