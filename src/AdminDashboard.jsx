import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./estilização/AdminDashboard.css"
import edicao from "./assets/edicao.png"
import edicaoTb3 from "./assets/edicaoTb3.jpeg"
import cadastro from './assets/cadaster.png'
import user from  './assets/user.png'
import Navbar from "./elements/Navbar";

const AdminDashboard = () => {
  const navigate = useNavigate(); 

  const handleViewAnamnese = () => {
    navigate("/admin/view-anamnese");
  };

  const handleViewAvNeuropsicologica = () => {
    navigate("/admin/view-avNeuropsicologica");
  };

  const handleRegisterUser = () => {
    navigate("/admin/register-user");
  };

  const handleEditUser = () => {
    navigate("/admin/edit-user");
  };

  return (
    
<>
<Navbar />
<nav className="nave">Admin Dashboard</nav>
    <div className="containere">
     
      <br /><br />
      <div className="aroy">
      <div onClick={handleViewAnamnese} className="card">
        <img src={edicao} alt="Edição de anamnese" />
 
      </div>
      <div onClick={handleViewAvNeuropsicologica} className="card">
        <img src={edicaoTb3} alt="Edição de Avaliação Neuropsicológica" />

      </div>
      <div onClick={handleRegisterUser} className="card">
        <img className="cadastro_foto" src={cadastro} alt="Cadastro" />
 
      </div>
     
     
      <div onClick={handleEditUser} className="card">
        <img className="cadastro_foto" src={user} alt="FOTO" />
 
      </div>
    
     
    </div>
    </div>
    </>
  );
};

export default AdminDashboard;
