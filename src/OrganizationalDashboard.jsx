import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./elements/Navbar";
import "./OrganizationalDashboard.css";
import { useNavigate } from "react-router-dom";
import edicao from './assets/edicao.png'
import Criar from  './assets/Criara.png'
import Vera from  './assets/Vera.png'
import Cadas from   './assets/CadasM.png'
import ListaU from './assets/ListaU.png'


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
 
      <Navbar  />    <nav>  <h1>Painel do Usuário Organizacional</h1></nav>
      
      <div className="aroy">



        
        <div onClick={handleViewAnamnese} className="card-org">
         <img src={edicao} alt="" />
        </div>
        <div onClick={HandleAnamneseForm } className="card-org">
         
       <img className="cadastro_foto" src={Cadas} alt="Cadastro de anamnese" />
          
        </div>
        <div onClick={handleFamilyUserList} className="card-org">
              <img className="cadastro_foto" src={ListaU} alt="Lista de usuários" />
        </div>
        <div onClick={handleViewAvNeuropsicologica} className="card-org">
       <img  className="cadastro_foto"  src={Vera} alt="Ver avaliação neuropsicologica" />
        </div>
        <div  onClick={HandleFormNeuropsicologica} className="card-org">

             <img className="cadastro_foto" src={Criar} alt="Criar avaliação  neuropsicologica" />

           
        </div>
     



      </div>
    </>
  );
};

export default OrganizationalDashboard;
