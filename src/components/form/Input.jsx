/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
  const [nome, setNome] = useState("Alan");

  return (
    <>
      <h3>{nome}</h3>
      <input
        tyupe="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
    </>
  );
};
