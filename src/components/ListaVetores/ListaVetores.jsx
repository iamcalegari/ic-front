import React from "react";
import {
  // HeaderList,
  List,
  ListContainer,
  ListItem,
  StyledAnchor,
  Text,
} from "./ListaVetores.styles";

const ListaVetores = ({ vetoresTamanho, vetoresId, max, format }) => {
  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.slice(0, +max).map((vet, index) => {
      return (
        <StyledAnchor
          href={`${baseUrlApi + vetoresId[index]}/baixar/${format}`}
        >
          <ListItem key={vetoresId[index]}>
            <Text>
              Vetor {index + 1} - (tamanho: {vet})
            </Text>
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
