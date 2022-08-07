import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ListaVetores } from "../components/ListaVetores";

// type Vetores = {
//   _id: string;
//   vetor: Array<number>;
//   dataHora: string;
//   __v: number;
// };

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TamanhoVetores />} />
        {Array(1000)
          .fill(0)
          .map((_, index) => (
            <Route
              path={`/${index + 1}/VetoresEncontrados`}
              element={<VetoresEncontrados range={index + 1} />}
            />
          ))}
      </Routes>
    </Router>
  );
}

function TamanhoVetores() {
  const [tamanho, setTamanho] = useState(1);
  const [vetores, setVetores] = useState([]);

  useEffect(() => {
    fetch("https://ic-iot.herokuapp.com/api/vetores/coletarid")
      .then((res) => res.json())
      .then((data) => {
        setVetores(data);
      });
  }, []);

  return (
    <div>
      <h1>Interface de Download</h1>
      <h4
        style={{
          fontVariant: "small-caps",
          fontStyle: "italic",
        }}
      >
        Quantidade de vetores
      </h4>

      <div
        style={{
          borderRadius: "1.2rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
            borderRadius: "1.2rem",
            padding: "2rem",
            opacity: "0.8",
          }}
        >
          <h3>
            Quantidade de vetores disponíveis: <strong>{vetores.length}</strong>
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: "1.2rem",
              padding: "1rem",
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            <input
              style={{
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "1.2rem",
                marginRight: "1rem",
                width: "100%",
              }}
              type="range"
              min="1"
              max={`${vetores.length}`}
              value={tamanho}
              onChange={(e) => setTamanho(e.target.valueAsNumber)}
            />
            <input
              style={{
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "1.2rem",
                width: "3rem",
                textAlign: "center",
                fontSize: "2rem",
              }}
              type="number"
              name="tamanho"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <Link to={`/${tamanho}/VetoresEncontrados`}>
            <button
              style={{
                border: "1px solid #ccc",
                borderRadius: "1.2rem",
                padding: "0.5rem",
                width: "100%",
                backgroundColor: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Listar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function VetoresEncontrados(props) {
  const [vetores, setVetores] = useState([]);
  const [formato, setFormato] = useState("JSON");

  useEffect(() => {
    fetch("https://ic-iot.herokuapp.com/api/vetores/coletarid")
      .then((res) => res.json())
      .then((data) => {
        setVetores(data);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Vetores encontrados {props.range}</h1>
        <h4
          style={{
            fontVariant: "small-caps",
            fontStyle: "italic",
          }}
        >
          Download
        </h4>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            borderRadius: "1.2rem",
            padding: "1rem",
            marginBottom: "1rem",
            opacity: "0.8",
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          <ListaVetores vetores={vetores} max={props.range} format={formato} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <Link to={`/vetores/${props.range}/baixarall/${formato}`}>
            <button
              style={{
                width: "30rem",
                marginRight: "1rem",
                border: "1px solid #ccc",
                borderRadius: "1.2rem",
                padding: "0.5rem",
                backgroundColor: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Baixar todos
            </button>
          </Link>
          <select
            style={{
              width: "5rem",
              height: "3rem",
              border: "1px solid #ccc",
              borderRadius: "1.3rem",
              padding: "0.5rem",
              marginRight: "1rem",
              backgroundColor: "#fff",
              fontSize: "1rem",
            }}
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
          >
            <option value="JSON">.json</option>
            <option value="TXT">.txt</option>
          </select>
        </div>
      </div>
    </div>
  );
}
