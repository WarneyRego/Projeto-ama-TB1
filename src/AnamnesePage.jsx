import React from "react";
import AnamneseForm from './AnamneseForm';
import Navbar from "./elements/Navbar";
const AnamnesePage = () => {
  return (
    <div>
       <Navbar/>
      <nav><h1>Criação de Anamnese</h1></nav>
 
      <AnamneseForm userRole="organizational" />
    </div>
  );
};

export default AnamnesePage;
