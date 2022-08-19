import React, { useState } from "react";

import ListaVetores from "../../components/ListaVetores/ListaVetores";
import {
  ContentWrapper,
  HeaderList,
  InputWrapper,
  Select,
  StyledLink,
  SubmitWrapper,
  Subtitle,
  Title,
  VetoresContainer,
  VetoresEncontradosContainer,
  View,
} from "./VetoresEncontrados.styles";

const VetoresEncontrados = () => {
  const [vetoresId, setVetoresId] = useState(
    localStorage.getItem("vetoresId").split(",")
  );

  const [vetoresTamanho, setVetoresTamanho] = useState(
    localStorage.getItem("vetoresTamanho").split(",")
  );

  const [formato, setFormato] = useState("json");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const range = urlSearchParams.get("range");

  return (
    <VetoresEncontradosContainer>
      <Title>Vetores encontrados: {range}</Title>
      <Subtitle>Download</Subtitle>

      <ContentWrapper>
        <View>
          <HeaderList>Lista de Vetores</HeaderList>
          <ListaVetores
            vetoresTamanho={vetoresTamanho}
            vetoresId={vetoresId}
            max={range}
            format={formato}
          />
        </View>

        <InputWrapper>
          <SubmitWrapper
            href={`https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/${formato}`}
          >
            <StyledLink>Baixar todos</StyledLink>
          </SubmitWrapper>
          <Select value={formato} onChange={(e) => setFormato(e.target.value)}>
            <option value="json">.json</option>
            <option value="txt">.txt</option>
          </Select>
        </InputWrapper>
      </ContentWrapper>
    </VetoresEncontradosContainer>
  );
};

export default VetoresEncontrados;
