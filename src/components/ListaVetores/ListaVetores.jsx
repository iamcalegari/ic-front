import React, { useState } from "react";
import {
  // HeaderList,
  List,
  ListContainer,
  ListItem,
  StyledAnchor,
} from "./ListaVetores.styles";

const ListaVetores = ({
  vetoresId,
  vetoresLeitura,
  vetoresTamanho,
  format,
}) => {
  const [count, setCount] = useState(0);

  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.map((vet, index) => {
      // if (count <= +vetoresTamanho[index]) {
      //   // setCount(1);
      // } else {
      //   setCount(1);
      // }
      return (
        <StyledAnchor
          href={`${baseUrlApi + vetoresId[index]}/${index + 1}/${
            vetoresLeitura[index]
          }/baixar/${format}`}
        >
          <ListItem>
            <stong>🔹Leitura {vetoresLeitura[index]} - </stong>Vetor {index + 1}{" "}
            - (tamanho: {vet})
          </ListItem>
        </StyledAnchor>
      );
    });
  };

  return (
    <ListContainer>
      <List>{listarVetores(vetoresTamanho)}</List>
    </ListContainer>
  );
};

export default ListaVetores;
