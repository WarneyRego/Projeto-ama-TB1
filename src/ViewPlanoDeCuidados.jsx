
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

import Navbar from "./elements/Navbar";
<<<<<<<< Updated upstream:PlanoView.jsx
const ViewPlano = () => {
  const [plano, setPlano] = useState([]);
  const [selectedPlano, setSelectedPlano] = useState(null);
========

const ViewPlanoDeCuidados = () => {
  const [planosDeCuidados, setPlanosDeCuidados] = useState([]);
  const [selectedPlanoDeCuidado, setSelectedPlanoDeCuidado] = useState(null);
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
  const [editData, setEditData] = useState({});
  const db = getFirestore();

  useEffect(() => {
<<<<<<<< Updated upstream:PlanoView.jsx
    const fetchPlano = async () => {
      const querySnapshot = await getDocs(collection(db, "TB4_Plano"));
      const planoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlano(planoData);
    };

    fetchPlano();
========
    const fetchPlanosDeCuidados = async () => {
      const querySnapshot = await getDocs(collection(db, "TB4_PlanoDeCuidados"));
      const planosDeCuidadosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlanosDeCuidados(planosDeCuidadosData);
    };

    fetchPlanosDeCuidados();
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
  }, [db]);

  const handleSelectPlanoDeCuidado = (planoDeCuidado) => {
    setSelectedPlanoDeCuidado(planoDeCuidado);
    setEditData(planoDeCuidado);
  };

  const handleUpdatePlanoDeCuidado = async () => {
    try {
<<<<<<<< Updated upstream:PlanoView.jsx
      const docRef = doc(db, "TB4_Plano", selectedPlano.id);
========
      const docRef = doc(db, "TB4_PlanoDeCuidados", selectedPlanoDeCuidado.id);
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
      await updateDoc(docRef, editData);
      alert("Plano de Cuidado atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o plano de cuidado: ", error);
    }
  };

  return (
    <>
      <Navbar />
<<<<<<<< Updated upstream:PlanoView.jsx
      <nav><h1>Edição do Plano</h1></nav>
      <div className="planos">

          {/*ignore*/}
        <ul className="lista">
          {plano.map((plano) => (
            <li className="user" key={plano.id}>
              RA:  {plano.id}

              <button class="Documents-btn" onClick={() => handleSelectPlano(plano)}>
                <span class="folderContainer">
========
      <nav><h1>Edição de Planos de Cuidados</h1></nav>
      <div className="planosDeCuidados">
        <ul className="lista">
          {planosDeCuidados.map((planoDeCuidado) => (
            <li className="user" key={planoDeCuidado.id}>
              RA: {planoDeCuidado.id}
              <br />
              Nome: {planoDeCuidado.nome}
              <button className="Documents-btn" onClick={() => handleSelectPlanoDeCuidado(planoDeCuidado)}>
                <span className="folderContainer">
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
                  <svg
                    className="fileBack"
                    width="146"
                    height="113"
                    viewBox="0 0 146 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                      fill="url(#paint0_linear_117_4)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_4"
                        x1="0"
                        y1="0"
                        x2="72.93"
                        y2="95.4804"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8F88C2"></stop>
                        <stop offset="1" stopColor="#5C52A2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className="filePage"
                    width="88"
                    height="99"
                    viewBox="0 0 88 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_6"
                        x1="0"
                        y1="0"
                        x2="81"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="#686868"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="fileFront"
                    width="160"
                    height="79"
                    viewBox="0 0 160 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                      fill="url(#paint0_linear_117_5)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_117_5"
                        x1="38.7619"
                        y1="8.71323"
                        x2="66.9106"
                        y2="82.8317"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C3BBFF"></stop>
                        <stop offset="1" stopColor="#51469A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
<<<<<<<< Updated upstream:PlanoView.jsx
                <p class="text">Planos</p>

========
                <p className="text">Plano de Cuidados</p>
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
              </button>
            </li>
          ))}
        </ul>

        {selectedPlanoDeCuidado && (
          <div className="carder">
            <div className="card-header">
              <div className="text-header">
<<<<<<<< Updated upstream:PlanoView.jsx
                <h2>Editando Plano{selectedPlano.ra}</h2>
========
                <h2>Editando Plano de Cuidado de {selectedPlanoDeCuidado.nome}</h2>
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
              </div>
            </div>
            
            <div className="card-body">
              <form className="form">
              <div className="form-group">
                  <label>Nome:</label>
                  <input
                    className="form-control"
                    type="text"
<<<<<<<< Updated upstream:PlanoView.jsx
                    value={editData.Atividades}
                    onChange={(e) => setEditData({ ...editData, ativadades: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Nomes da Medicação:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.nomesDaMedicação}
                    onChange={(e) => setEditData({ ...editData, nomesDaMedicação: e.target.value })}
========
                    value={editData.nome}
                    onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Atividades:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={editData.atividades}
                    onChange={(e) => setEditData({ ...editData, atividades: e.target.value })}
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
                  />
                </div>
                <div className="form-group">
                  <label>Nomes da Medicação:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={editData.nomesDaMedicação}
                    onChange={(e) => setEditData({ ...editData, nomesDaMedicação: e.target.value })}
                  />
<<<<<<<< Updated upstream:PlanoView.jsx
                </div> 
                <div class="form-group">
========
                </div>
                <div className="form-group">
                  <label>Dosagem:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={editData.dosagem}
                    onChange={(e) => setEditData({ ...editData, dosagem: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Frequência:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={editData.frequência}
                    onChange={(e) => setEditData({ ...editData, frequência: e.target.value })}
                  />
                </div>
                <div className="form-group">
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
                  <label>Orientações:</label>
                  <input
                    className="form-control"
                    type="text"
<<<<<<<< Updated upstream:PlanoView.jsx
                    value={editData.Orientações}
                    onChange={(e) => setEditData({ ...editData, Orientações: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Observacao Administrativa:</label>
========
                    value={editData.orientações}
                    onChange={(e) => setEditData({ ...editData, orientações: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Observação Administrativa:</label>
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
                  <input
                    className="form-control"
                    type="text"
                    value={editData.observaçãoAdministrativa}
                    onChange={(e) => setEditData({ ...editData, observaçãoAdministrativa: e.target.value })}
                  />
                </div>
<<<<<<<< Updated upstream:PlanoView.jsx
              
                <div class="form-group">
                  <label>frequencia
                    :</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.frequencia}
                    onChange={(e) => setEditData({
                      ...editData, frequencia
                        : e.target.value
                    })}
                  />
                </div>


                <button class="btn" type="button" onClick={handleUpdateAnamnese}>Salvar Alterações</button>
========
                <button className="btn" type="button" onClick={handleUpdatePlanoDeCuidado}>Salvar Alterações</button>
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

<<<<<<<< Updated upstream:PlanoView.jsx
export default PlanoView;
========
export default ViewPlanoDeCuidados;
>>>>>>>> Stashed changes:src/ViewPlanoDeCuidados.jsx
