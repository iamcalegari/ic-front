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
  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.map((vet, index) => {
      
      return (
        <StyledAnchor key={index}
          href={`${baseUrlApi + vetoresId[index]}/${index + 1}/${
            vetoresLeitura[index]
          }/baixar/${format}`}
        >
          <ListItem >
            <span style={{fontStyle: "italic"}}>🔹Leitura {vetoresLeitura[index]} - </span>Vetor {index + 1}{" "}
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
