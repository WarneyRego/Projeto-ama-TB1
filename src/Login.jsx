 //Pag de login, quando o user clicar no botão de login, ele será redirecionado para a sua dashboard de acordo com a role 
 //(qualquer coisinha já quebra tudo, cuidado até qnd for criar div)
  import React, { useState } from "react";
  import app from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import  "./estilização/Login.css";
import Logo from  "./elements/Logo2.png";


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
      <div className="carde">
        
      
      <form className="form_container"  onSubmit={handleLogin}>
      <div class="logo_container"> 
        <img src={Logo} alt="Logo" />
      </div>
  <div class="title_container">
    <p class="title">Seja bem-vindo ao site da AMA</p>
    <span class="subtitle">Realize o Login para prosseguir</span>
  </div>
     
      <br /><br />
        <div className="inputBox1">
       
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            required
          />
           <span>E-mail</span>
          </div>
          <div className="inputBox">
            
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            required
          />
           <span>Senha</span>
          </div>
             <button type="submit" className="enter">Login</button>
        
      </form>
      </div>
    </div>
  </>
);
};

export default Login;
