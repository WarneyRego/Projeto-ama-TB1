import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./elements/Navbar";
import "./OrganizationalDashboard.css";
import { useNavigate } from "react-router-dom";
const OrganizationalDashboard = () => {



const navigate = useNavigate(); 

const handleViewAnamnese = () => {
  navigate("/admin/view-anamnese");
};

const handleViewAvNeuropsicologica = () => {
  navigate("/admin/view-avNeuropsicologica");
};

const handleFamilyUserList = () => {
  navigate("/organizational/family-users-list");
};

const HandleAnamneseForm = () => {
  navigate("/organizational/anamnese-form");
};
const HandleFormNeuropsicologica = () => {
  navigate("/organizational/avNeuropsicologica-form");
};

const HandleFamilyList = () => {
  navigate("/organizational/family-users-list");
};

  return (
    <>
      <Navbar />
      <nav>  <h1>Painel do Usuário Organizacional</h1></nav>
      <div className="aroy">



        
        <div onClick={handleViewAnamnese} className="card">
         view anamnese
        </div>
        <div onClick={HandleAnamneseForm } className="card">
         
             form
          
        </div>
        <div onClick={handleFamilyUserList} className="card">
              Ir para Lista de Usuários Familiares
        </div>
        <div onClick={handleViewAvNeuropsicologica} className="card">
          Ver AvNeuropsicologica
        </div>
        <div onClick={HandleFormNeuropsicologica} className="card">

              Ir para Formulário de AvNeuropsicologica
           
        </div>
     



      </div>
    </>
  );
};

export default OrganizationalDashboard;
