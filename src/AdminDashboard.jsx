import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./estilização/AdminDashboard.css"
import edicao from "./assets/edicao.png"
import cadastro from './assets/cadaster.png'
import user from  './assets/user.png'

const AdminDashboard = () => {
  const navigate = useNavigate(); 

  const handleViewAnamnese = () => {
    navigate("/admin/view-anamnese");
  };

  const handleRegisterUser = () => {
    navigate("/admin/register-user");
  };

  const handleEditUser = () => {
    navigate("/admin/edit-user");
  };

  return (
<>
<nav className="nave">Admin Dashboard</nav>
    <div className="containere">
     
      <br /><br />
      <div className="aroy">
      <div onClick={handleViewAnamnese} className="card">
        <img src={edicao} alt="Edição de anamnese" />
 
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
