/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./App.css";

import Primeiro from "./components/Primeiro";
import ComParametros from "./components/ComParametros";
import ComFilhos from "./components/ComFilhos";
import Card from "./layout/Card";

export default () => (
  <div className="app">
    <Card titulo="#03 - Componente Com Parametros">
      <ComParametros titulo="Título 1" subtitulo="Subtítulo 1" />
      <ComParametros titulo="Título 2" subtitulo="Subtítulo 2" />{" "}
    </Card>

    <Card titulo="#02 - Componente Com Filhos">
      <ComFilhos>
        <div>Primeiro</div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <div>Segundo</div>
      </ComFilhos>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
