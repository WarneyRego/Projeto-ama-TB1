import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FamilyUsersList from "./FamilyUsersList";

const FamilyUsersPage = () => {
  const [users, setUsers] = useState([]); 
  const db = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "TB1_Pessoas_com_TEA");
      const userDocs = await getDocs(usersCollection);
      const userList = userDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    fetchUsers();
  }, [db]);

  return <FamilyUsersList users={users} />;
};

export default FamilyUsersPage;
