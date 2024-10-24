 
  import React, { useState } from "react";
  import app from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import  "./estilização/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role; 

        if (role === "Admin") {
          navigate("/admin-dashboard"); 
        } else if (role === "Organizational") {
          navigate("/organizational-dashboard"); 
        } else if (role === "Family") {
          navigate("/family-dashboard");
        }
      } else {
        console.error("Documento não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    
  
    <>
     
    <div className='container'>

    <form  onSubmit={handleLogin}>
      
      <div className="painel">
      <h1 className="login">Login</h1>
      <input className='item'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input  className='item'

        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button className="botao" type="submit">Login</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default Login;
