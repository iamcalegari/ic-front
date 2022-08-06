/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <div>
      <h2>O número {props.numero} é</h2>
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    </div>
  );
};