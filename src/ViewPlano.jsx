import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "./estilização/ViewPlano.css"
import Navbar from "./elements/Navbar";

const ViewPlano = () => {
  const [planos, setPlanos] = useState([]);
  const [selectedPlano, setSelectedPlano] = useState(null);
  const [editData, setEditData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchPlanos = async () => {
      const querySnapshot = await getDocs(collection(db, "TB4_Plano_De_Cuidados"));
      const planosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlanos(planosData);
    };

    fetchPlanos();
  }, [db]);

  const handleSelectPlano = (plano) => {
    setSelectedPlano(plano);
    setEditData(plano); // Preenche o formulário com os dados selecionados
  };

  const handleUpdatePlano = async () => {
    try {
      const docRef = doc(db, "TB4_Plano_De_Cuidados", selectedPlano.id);
      await updateDoc(docRef, editData);
      alert("Plano atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o plano: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <nav><h1>Edição do Plano de Cuidados</h1></nav>
      <div className="Planos">


        <ul className="lista">
          {planos.map((plano) => (
            <li className="user" key={plano.id}>
              RA:  {plano.id}

              <button class="Documents-btn" onClick={() => handleSelectPlano(plano)}>
                <span class="folderContainer">
                  <svg
                    class="fileBack"
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
                        <stop stop-color="#8F88C2"></stop>
                        <stop offset="1" stop-color="#5C52A2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    class="filePage"
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
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#686868"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    class="fileFront"
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
                        <stop stop-color="#C3BBFF"></stop>
                        <stop offset="1" stop-color="#51469A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                </span>
                <p class="text">Editar plano</p>

              </button>
            </li>
          ))}
        </ul>
 {/*ignore*/}
        {selectedPlano && (
          <div className="carder">
            <div class="card-header">

              <div className="text-header">
              <h2>Editando Plano de Cuidados {selectedPlano.RA}</h2>

              </div>
            </div>
            <div class="card-body">
              <form className="form">
                <div class="form-group">
                  <label>Ativades:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.Atividades}
                    onChange={(e) => setEditData({ ...editData, atividades: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Nomes Da Medicação:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.nomesDaMedicação}
                    onChange={(e) => setEditData({ ...editData, nomesDaMedicação: e.target.value })}
                  />
                </div> 
                <div class="form-group">
                  <label>Dosagem:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.dosagem}
                    onChange={(e) => setEditData({ ...editData, dosagem: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Frequência:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.frequencia}
                    onChange={(e) => setEditData({ ...editData, frequencia: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Orientações:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.orientacoes}
                    onChange={(e) => setEditData({ ...editData, orientacoes: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Observação Administrativa:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.observacaoAdministrativa}
                    onChange={(e) => setEditData({ ...editData, observacaoAdministrativa: e.target.value })}
                  />
                </div>


                <button class="btn" type="button" onClick={handleUpdatePlano}>Salvar Alterações</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );

};

export default ViewPlano;
