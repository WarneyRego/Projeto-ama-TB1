import React from "react";
import AvNeuropsicologicaForm from './AvNeuropsicologicaForm';

const AvNeuropsicologicaPage = () => {
  return (
    <div>
      <h1>Formulário de Avaliação Neuropsicológica</h1>
      <AvNeuropsicologicaForm userRole="organizational" />
    </div>
  );
};

export default AvNeuropsicologicaForm;