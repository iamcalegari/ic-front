/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Filho from "./Filho";

export default (props) => (
  <div>
    <Filho {...props}>Alan</Filho>
    <Filho sobrenome={props.sobrenome}>Larissa</Filho>
    <Filho sobrenome="Mota">Vitor</Filho>
  </div>
);
