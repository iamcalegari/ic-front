import React from "react";
import { Link } from "react-router-dom";

export function ListaVetores(props) {
  function listarVetores(
    vetores: Array<{
      _id: string;
      vetor: Array<number>;
      dataHora: string;
      __v: number;
    }>
  ) {
    return vetores.map((vetor, index) => {
      if (index + 1 <= props.max) {
        return (
          <Link to={`/vetores/${vetor._id}/baixar/${props.format}`}>
            <li key={vetor._id}>
              <strong>Vetor {index + 1}</strong>
              {" - "}({vetor.vetor.length} elementos)
            </li>
          </Link>
        );
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <h3
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Lista de Vetores
      </h3>
      <ul>{listarVetores(props.vetores)}</ul>
    </div>
  );
}
