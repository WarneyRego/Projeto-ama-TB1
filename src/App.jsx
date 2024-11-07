import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import RegisterUser from "./RegisterUser";
import ViewAnamnese from "./ViewAnamnese";
import ViewAvNeuropsicologica from "./ViewAvNeuropsicologica";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import EditUser from "./EditUser";
import OrganizationalDashboard from "./OrganizationalDashboard"; 
import FamilyDashboard from "./FamilyDashboard"; 
import Login from "./Login";
import AnamnesePage from "./AnamnesePage"; 
<<<<<<< Updated upstream
import AvNeuropsicologicaPage from "./AvNeuropsicologicaPage"
=======
import AvNeuropsicologicaPage from "./AvNeuropsicologicaPage";
import PlanodeCuidadosPage from "./PlanodeCuidadosPage";
>>>>>>> Stashed changes
import FamilyUsersPage from "./FamilyUsersPage";
import FamilyUsersList from "./FamilyUsersList";
import FamilyUserDetail from  "./FamilyUserDetail";
import Navbar from "./elements/Navbar";
import ViewPlanoDeCuidados from "./ViewPlanoDeCuidados";
import PlanoDeCuidadosForm from "./PlanoDeCuidadosForm";


function App() {
  
  return (
  
    <Router>
       
        {/*Cuidado, esse sistema de rotas parece uma bomba*/}
      <Routes>
       
        {/* Rota da página inicial */}
        <Route path="/" element={<Login/>} />

        {/* Rotas da dashboard do Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/register-user" element={<RegisterUser />} />
        <Route path="/admin/view-anamnese" element={<ViewAnamnese />} />
        <Route path="/admin/view-avNeuropsicologica" element={<ViewAvNeuropsicologica />} />
<<<<<<< Updated upstream
=======
        <Route path="/admin/view-plano" element={<ViewPlanoDeCuidados />} />
>>>>>>> Stashed changes
        <Route path="/admin/edit-user" element={<EditUser />} />

        {/* Rota da dashboard organizacional */}
        <Route path="/organizational-dashboard" element={<OrganizationalDashboard />} />
        <Route path="/organizational/anamnese-form" element={<AnamnesePage />} />
        <Route path="/organizational/avNeuropsicologica-form" element={<AvNeuropsicologicaPage />} />
<<<<<<< Updated upstream
=======
        <Route path="/organizational/plano-form" element={<PlanodeCuidadosPage />} />
>>>>>>> Stashed changes
        <Route path="/organizational/family-users-list" element={<FamilyUsersPage />} />
        <Route path="/family-user/:id" element={<FamilyUserDetail />} />
        <Route path="/organizational/anamnese/:id" element={<ViewAnamnese />} /> {/* Rota para visualizar a anamnese */}


        {/* Rota da dashboard do usuário familiar */}
        <Route path="/family-dashboard" element={<FamilyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
