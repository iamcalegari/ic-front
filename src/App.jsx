/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

export default () => (
  <div className="app">
    <Card titulo="#06 - Componente Condicional Com If">
      <CondicionalComIf numero={1} />
    </Card>
    é
    <Card titulo="#05 - Componente Condicional">
      <Condicional numero={11} />
    </Card>
    <Card titulo="#04 - Componente Repetição">
      <Repeticao />
    </Card>
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
