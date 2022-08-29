import React, { useEffect, useState } from "react";

import ListaVetores from "../../components/ListaVetores/ListaVetores";
import coletarUrls from "../../components/ColetarUrls";
import BaixarTodosVetores from "../../components/BaixarTodosVetores";

import {
  Button,
  ContentWrapper,
  HeaderList,
  InputWrapper,
  Select,
  SubmitWrapper,
  Subtitle,
  Title,
  VetoresEncontradosContainer,
  View,
} from "./VetoresEncontrados.styles";

const VetoresEncontrados = () => {
  const baseUrl = "https://ic-iot.herokuapp.com/";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const leituras = urlSearchParams.get("leituras");

  const [id, setId] = useState([]);
  const [leitura, setLeitura] = useState([]);
  const [formato, setFormato] = useState("json");
  const [tamanho, setTamanho] = useState([]);
  const [urls, setUrls] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(baseUrl + "api/vetores/coletarid/" + leituras, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setId(result.id);
        setLeitura(result.leitura);
        setTamanho(result.tamanho);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    let u = coletarUrls({
      vetoresId: id,
      vetoresLeitura: leitura,
      format: formato,
    });
    setUrls(u);
  }, [count, formato]);

  return (
    <VetoresEncontradosContainer>
      {id && <Title>Vetores encontrados: {id.length}</Title>}
      <Subtitle>Download</Subtitle>

      <ContentWrapper>
        <View>
          <HeaderList>Lista de Vetores</HeaderList>
          {id && (
            <ListaVetores
              vetoresId={id}
              vetoresLeitura={leitura}
              vetoresTamanho={tamanho}
              format={formato}
            />
          )}
        </View>
        <InputWrapper>
          <SubmitWrapper>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCount(count + 1);
              }}
            >
              Baixar todos
            </Button>
            <div style={{ display: "none" }}>
              {count && <BaixarTodosVetores urls={urls} />}
            </div>
          </SubmitWrapper>
          <Select
            value={formato}
            onChange={(e) => {
              setCount(0);
              setFormato(e.target.value);
            }}
          >
            <option value="json">.json</option>
            <option value="txt">.txt</option>
          </Select>
        </InputWrapper>
      </ContentWrapper>
    </VetoresEncontradosContainer>
  );
};

export default VetoresEncontrados;
