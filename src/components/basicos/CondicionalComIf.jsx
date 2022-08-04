/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from "./if";

export default (props) => {
  return (
    <div>
      <h2>O número {props.numero} é</h2>
      <If test={props.numero % 2 === 0}>
        <span>Par</span>
      </If>
      <If test={props.numero % 2 !== 0}>
        <span>Impar</span>
      </If>
    </div>
  );
};
