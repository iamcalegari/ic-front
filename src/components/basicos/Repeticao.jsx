/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import produtos from "../../data/produtos";

export default (props) => {
  function getProdutos() {
    return produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProdutos()}</ul>
    </div>
  );
};
