import React from "react";
import { Link } from "react-router-dom";

const OrganizationalDashboard = () => {
  return (
    <div>
      <h1>Painel do Usuário Organizacional</h1>
      <nav>
        <ul>
          <li>
          <Link to="/admin/view-anamnese">Ver Anamnese</Link>
          </li>
          <li>
            <Link to="/organizational/anamnese-form">
              Ir para Formulário de Anamnese
            </Link>
          </li>
          <li>
            <Link to="/organizational/family-users-list">
              Ir para Lista de Usuários Familiares
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrganizationalDashboard;
