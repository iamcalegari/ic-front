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

import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";

export default () => (
  <div className="app">
    <Card titulo="#09 - Componente Input" color="#001820">
      <Input />
    </Card>
    <Card titulo="#08 - Componente Comunicação indireta" color="#85E81E">
      <Super />
    </Card>
    <Card titulo="#07 - Componente Comunicação direta" color="#E8891E">
      <Pai sobrenome="Calegari" />
    </Card>
    <Card titulo="#06 - Componente Condicional Com If" color="#72DEC2">
      <CondicionalComIf numero={1} />
    </Card>
    é
    <Card titulo="#05 - Componente Condicional" color="#DE728E">
      <Condicional numero={11} />
    </Card>
    <Card titulo="#04 - Componente Repetição" color="#C4DE72">
      <Repeticao />
    </Card>
    <Card titulo="#03 - Componente Com Parametros" color="#8C72DE">
      <ComParametros titulo="Título 1" subtitulo="Subtítulo 1" />
      <ComParametros titulo="Título 2" subtitulo="Subtítulo 2" />{" "}
    </Card>
    <Card titulo="#02 - Componente Com Filhos" color="#DEC272">
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
