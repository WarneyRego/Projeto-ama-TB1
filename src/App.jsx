
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import OrganizationalDashboard from "./OrganizationalDashboard";
import FamilyDashboard from "./FamilyDashboard";
import FamilyUsersList from "./FamilyUsersList";
import FamilyUserDetail from "./FamilyUserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/organizational-dashboard" element={<OrganizationalDashboard />} />
        <Route path="/family-dashboard" element={<FamilyDashboard />} />
        <Route path="/family-users" element={<FamilyUsersList />} />
        <Route path="/family-user/:id" element={<FamilyUserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
