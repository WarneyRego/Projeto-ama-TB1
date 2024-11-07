import React from "react";
import PlanoDeCuidadosForm from './PlanoDeCuidadosForm.jsx';
import Navbar from "./elements/Navbar.jsx";
const PlanodeCuidadosPage = () => {
  return (
    <>
    
    
    <Navbar />
    <nav> <h1>Formulário de Plano de Cuidados</h1></nav>
    
    <div>
      
      
      <PlanoDeCuidadosForm userRole="organizational" />
    </div>
    </>
  );
};

export default PlanodeCuidadosPage;