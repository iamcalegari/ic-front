import React from "react";
import {
  // HeaderList,
  List,
  ListContainer,
  ListItem,
  StyledAnchor,
  Text,
} from "./ListaVetores.styles";

const ListaVetores = ({ vetores, max, format }) => {
  const baseUrlApi = "https://ic-iot.herokuapp.com/api/vetores/";
  const listarVetores = (vetores) => {
    return vetores.slice(0, +max).map(({ id, tamanho }, index) => {
      return (
        <StyledAnchor href={`${baseUrlApi + id}/baixar/${format}`}>
          <ListItem key={id}>
            <Text>
              Vetor {index + 1} - (tamanho: {tamanho})
            </Text>
          </ListItem>
        </StyledAnchor>
      );
    });
  };

  return (
    <ListContainer>
      <List>{listarVetores(vetores)}</List>
    </ListContainer>
  );
};

export default ListaVetores;
