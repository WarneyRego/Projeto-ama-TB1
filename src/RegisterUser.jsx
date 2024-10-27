// Cadastro de users, parte que só o adm tem acesso
import React, { useState } from "react";
import app from "./firebaseConfig"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import './estilização/RegisterUser.css' 
import Navbar from  './elements/Navbar'

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Family"); 
  
  const [ra, setRa] = useState("");
  const [status, setStatus] = useState("Concluído"); 
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [contato, setContato] = useState("");
  const [gestacao, setGestacao] = useState("");
  const [parto, setParto] = useState("");
  const [desenvolvimentoInicial, setDesenvolvimentoInicial] = useState("");
  const [alergias, setAlergias] = useState("");
  const [medicacoes, setMedicacoes] = useState("");
  const [observacaoAdministrativa, setObservacaoAdministrativa] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
    
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     
      await setDoc(doc(db, "usuarios", user.uid), {
        email: user.email,
        role: role, 
      });

     
      if (role === "Family") {
        await setDoc(doc(db, "TB1_Pessoas_com_TEA", user.uid), {
          ra: ra,
          status: status,
          nome: nome,
          dataNascimento: dataNascimento,
          diagnostico: diagnostico,
          responsavel: responsavel,
          contato: contato,
          gestacao: gestacao,
          parto: parto,
          desenvolvimentoInicial: desenvolvimentoInicial,
          alergias: alergias,
          medicacoes: medicacoes,
          observacaoAdministrativa: observacaoAdministrativa,
        });
      }

      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário: " + error.message);
      
    }
  };

  return (
<>
<Navbar />
<nav><h1>Cadastro de  Usuários</h1></nav>



    <div className="tabela">
      
      <div className="painel">
    <form className="formu" onSubmit={handleRegister}>
      <input
        type="email"  className="itemz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input  className="itemz"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Organizational">Organizacional</option>
        <option value="Family">Familiar</option>
      </select>

     
      {role === "Family" && (
        <>
          <input className="itemz"
            type="text"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            placeholder="RA (Registro Acadêmico)"
            required
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Concluído">Concluído</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Transferido">Transferido</option>
          </select>
          <input  className="itemz"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
          />
          <input  className="itemz"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de Nascimento"
            required
          />
          <input  className="itemz"
            type="text"
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
            placeholder="Diagnóstico"
          />
          <input  className="itemz"
            type="text"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            placeholder="Responsável"
          />
          <input  className="itemz"
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            placeholder="Contato"
          />
          <input  className="itemz"
            type="text"
            value={gestacao}
            onChange={(e) => setGestacao(e.target.value)}
            placeholder="Gestação"
          />
          <input  className="itemz"
            type="text"
            value={parto}
            onChange={(e) => setParto(e.target.value)}
            placeholder="Parto"
          />
          <input  className="itemz"
            type="text"
            value={desenvolvimentoInicial}
            onChange={(e) => setDesenvolvimentoInicial(e.target.value)}
            placeholder="Desenvolvimento Inicial"
          />
          <input  className="itemz"
            type="text"
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
            placeholder="Alergias"
          />
          <input  className="itemz"
            type="text"
            value={medicacoes}
            onChange={(e) => setMedicacoes(e.target.value)}
            placeholder="Medicações"
          />
          <input  className="itemz"
            type="text"
            value={observacaoAdministrativa}
            onChange={(e) => setObservacaoAdministrativa(e.target.value)}
            placeholder="Observação Administrativa"
          />
        </>
      )}
      <button className="btno" type="submit"> Criar usuário</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default RegisterUser;
