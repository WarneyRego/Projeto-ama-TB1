import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "./estilização/ViewAnamnese.css"
import Navbar from "./elements/Navbar";
const ViewAnamnese = () => {
  const [anamneses, setAnamneses] = useState([]);
  const [selectedAnamnese, setSelectedAnamnese] = useState(null);
  const [editData, setEditData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchAnamneses = async () => {
      const querySnapshot = await getDocs(collection(db, "TB2_Anamnese_Medica"));
      const anamnesesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAnamneses(anamnesesData);
    };

    fetchAnamneses();
  }, [db]);

  const handleSelectAnamnese = (anamnese) => {
    setSelectedAnamnese(anamnese);
    setEditData(anamnese); // Preenche o formulário com os dados selecionados
  };

  const handleUpdateAnamnese = async () => {
    try {
      const docRef = doc(db, "TB2_Anamnese_Medica", selectedAnamnese.id);
      await updateDoc(docRef, editData);
      alert("Anamnese atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar a anamnese: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <nav><h1>Edição de Anamneses</h1></nav>
      <div className="anamnses">

          {/*ignore*/}
        <ul className="lista">
          {anamneses.map((anamnese) => (
            <li className="user" key={anamnese.id}>
              RA:  {anamnese.id}

              <button class="Documents-btn" onClick={() => handleSelectAnamnese(anamnese)}>
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
                <p class="text">Anamneses</p>

              </button>
            </li>
          ))}
        </ul>
 {/*ignore*/}
        {selectedAnamnese && (
          <div className="carder">
            <div class="card-header">

              <div className="text-header">
                <h2>Editando Anamnese{selectedAnamnese.ra}</h2>
              </div>
            </div>
            <div class="card-body">
              <form className="form">
                <div class="form-group">
                  <label>Queixas:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.queixas}
                    onChange={(e) => setEditData({ ...editData, queixas: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Histórico Pessoal:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.historicoPessoal}
                    onChange={(e) => setEditData({ ...editData, historicoPessoal: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Histórico Familiar:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.historicoFamiliar}
                    onChange={(e) => setEditData({ ...editData, historicoFamiliar: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Histórico Pre definido:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.historicoPreDefinido}
                    onChange={(e) => setEditData({ ...editData, historicoPreDefinido: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>Observacao Administrativa:</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.observacaoAdministrativa}
                    onChange={(e) => setEditData({ ...editData, observacaoAdministrativa: e.target.value })}
                  />
                </div>
                <div class="form-group">
                  <label>queixas
                    :</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.observacaoAdministrativa}
                    onChange={(e) => setEditData({
                      ...editData, queixas
                        : e.target.value
                    })}
                  />
                </div>
                <div class="form-group">
                  <label>Seleção Queixas Comuns
                    :</label>
                  <input
                    class="form-control"
                    type="text"
                    value={editData.selecaoQueixasComuns}
                    onChange={(e) => setEditData({
                      ...editData, selecaoQueixasComuns
                        : e.target.value
                    })}
                  />
                </div>


                <button class="btn" type="button" onClick={handleUpdateAnamnese}>Salvar Alterações</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );

};

export default ViewAnamnese;
