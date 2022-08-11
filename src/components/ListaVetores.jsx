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
    return vetores.slice(0, +max).map((id, index) => {
      return (
        <StyledAnchor href={`baseUrlApi${id}/baixar/${format}`}>
          <ListItem key={id}>
            <Text>
              Vetor {index + 1} - ({id})
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
