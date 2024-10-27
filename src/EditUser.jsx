//Edição de users já criados(vai ser aqui que vão editar o andamento)
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import './estilização/EditUser.css'
import Navbar from "./elements/Navbar";
const EditUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editData, setEditData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "TB1_Pessoas_com_TEA"));
      const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();
  }, [db]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setEditData(user); // vai preencher o form conforme fornece as informações
  };

  const handleUpdateUser = async () => {
    try {
      const docRef = doc(db, "TB1_Pessoas_com_TEA", selectedUser.id);
      await updateDoc(docRef, editData);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o usuário: ", error);
    }
  };

  return (
    <>
    <Navbar />
    <nav><h1>Editar Cadastro de Usuários</h1></nav>
    <div className="EDIT">
     
      
           <div className="lista_user">
      <ul className="lista_lista">
        {users.map((user) => (
          <li className="users" key={user.id}>
            {user.nome} - {user.ra}
            <button className="btn" onClick={() => handleSelectUser(user)}>Editar</button>
          </li>
        ))}
      </ul>
      </div>

      {selectedUser && (
        <div className="carder">
          <div className="card-header">
            <div className="card-texte">
          <h2>Editando Usuário {selectedUser.nome}</h2>
          </div>
          </div>
          <form className="form">
            <div className="forme-group">
              <label>Nome</label>
              <input
                type="text"
                value={editData.nome}
                onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
              />
            </div>
            <div className="forme-group">
              <label>Status</label>
              <input
                type="text"
                value={editData.status}
                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
              />
            </div>
            {/* Adicionar o resto dos campos */}
            <button className="btn" type="button" onClick={handleUpdateUser}>Salvar Alterações</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default EditUser;
