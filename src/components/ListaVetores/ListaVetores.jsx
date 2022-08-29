import React, { useState } from "react";
import {
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
  let vetoresObj = [];

  vetoresId.forEach((id, index) => {
    vetoresObj = [
      ...vetoresObj,
      {
        index,
        id,
        leitura: vetoresLeitura[index],
        tamanho: vetoresTamanho[index],
      },
    ];
  });

  vetoresObj.sort((a, b) => a.leitura - b.leitura);

  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.map((item, index) => {
      return (
        <StyledAnchor
          key={index}
          href={`${baseUrlApi + item.id}/${item.leitura}/${
            index + 1
          }/baixar/${format}`}
        >
          <ListItem>
            <span style={{ fontStyle: "italic" }}>
              🔹Leitura {item.leitura} -{" "}
            </span>
            Vetor {index + 1} - (tamanho: {item.tamanho})
          </ListItem>
        </StyledAnchor>
      );
    });
  };

  return (
    <ListContainer>
      <List>{listarVetores(vetoresObj)}</List>
    </ListContainer>
  );
};

export default ListaVetores;
