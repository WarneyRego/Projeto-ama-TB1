// Dashboard do admin

import React from "react";
import { useNavigate } from "react-router-dom"; 

const AdminDashboard = () => {
  const navigate = useNavigate(); 

  // Função para redirecionar para a página de visualização e edição das anamneses
  const handleViewAnamnese = () => {
    navigate("/admin/view-anamnese");
  };

  // Função para redirecionar para a página de cadastro de usuários
  const handleRegisterUser = () => {
    navigate("/admin/register-user");
  };

  // Função para redirecionar para a página de edição de cadastro de usuários
  const handleEditUser = () => {
    navigate("/admin/edit-user");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={handleViewAnamnese}>Ver e Editar Anamneses</button>
      <button onClick={handleRegisterUser}>Cadastrar Usuário</button>
      <button onClick={handleEditUser}>Editar Cadastro de Usuários</button>
    </div>
  );
};

export default AdminDashboard;
