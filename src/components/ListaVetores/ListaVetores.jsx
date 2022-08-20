import React from "react";
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
  max,
  format,
}) => {
  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.slice(0, +max).map((vet, index) => {
      return (
        <StyledAnchor
          href={`${baseUrlApi + vetoresId[index]}/${
            index + 1
          }/baixar/${format}`}
        >
          <ListItem>
            <stong>🔹Leitura {vetoresLeitura} - </stong>Vetor {index + 1} -
            (tamanho: {vet})
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
