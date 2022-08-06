import React, { useEffect, useState } from "react";

import { ListaVetores } from "../../components/ListaVetores";

// type Vetores = {
//   _id: string;
//   vetor: Array<number>;
//   dataHora: string;
//   __v: number;
// };

export function VetoresEncontrados(props) {
  const [vetores, setVetores] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://ic-iot.herokuapp.com/api/vetores/coletar")
      .then((res) => res.json())
      .then((data) => {
        setVetores(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Vetores encontrados</h2>
      </div>
      <div>
        <ListaVetores vetores={vetores} max={props.range} />
      </div>
    </div>
  );
}
