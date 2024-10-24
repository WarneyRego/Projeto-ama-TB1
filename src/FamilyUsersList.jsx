import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const FamilyUsersList = () => {
  const [familyUsers, setFamilyUsers] = useState([]);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFamilyUsers = async () => {
      const familyUsersCollection = collection(db, "TB1_Pessoas_com_TEA");
      const familyUsersSnapshot = await getDocs(familyUsersCollection);
      const familyUsersList = familyUsersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFamilyUsers(familyUsersList);
    };

    fetchFamilyUsers();
  }, [db]);

  const handleUserClick = (id) => {
    navigate(`/family-user/${id}`); 
  };

  return (
    <div>
      <h1>Usuários Familiares</h1>
      <ul>
        {familyUsers.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.nome} - {user.ra} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamilyUsersList;
