/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => (
  <div>
    <button
      onClick={() => {
        props.onClicar(Math.random(), "Final");
      }}
    >
      Alterar
    </button>
  </div>
);
