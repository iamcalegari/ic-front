import React from "react";
import { Link } from "react-router-dom";

export function ListaVetores(props) {
  function listarVetores(
    // vetores: Array<{
    //   _id: string;
    //   vetor: Array<number>;
    //   dataHora: string;
    //   __v: number;
    // }>
    vetores
  ) {
    return vetores.slice(0, props.max).map((id, index) => {
      console.log(props.max);
      return (
        <Link
          to={`https://ic-iot.herokuapp.com/api/vetores/${id}/baixar/${props.format}`}
        >
          <li
            key={id}
            style={{
              fontSize: "1.2rem",
            }}
          >
            <strong>
              Vetor {index + 1} - ({id})
            </strong>
          </li>
        </Link>
      );
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
