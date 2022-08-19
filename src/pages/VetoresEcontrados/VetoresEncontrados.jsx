import React, { useState } from "react";
import coletarUrls from "../../components/ColetarUrls";

import ListaVetores from "../../components/ListaVetores/ListaVetores";
import {
  Button,
  ContentWrapper,
  HeaderList,
  InputWrapper,
  Select,
  StyledLink,
  SubmitWrapper,
  Subtitle,
  Title,
  // VetoresContainer,
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

  const [count, setCount] = useState(0);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const range = urlSearchParams.get("range");

  const urls = coletarUrls(range);
  console.log(urls);

  const downloadJson = (urls) => {
    return urls.map((url) => {
      console.log(url);
      return (
        <div>
          <iframe src={url} style={{ display: "none" }}></iframe>
        </div>
      );
    });
  };
  const downloadTxt = (urls) => {
    return urls.map((url) => {
      console.log(url);
      return (
        <div>
          <iframe src={url} style={{ display: "none" }}></iframe>
        </div>
      );
    });
  };

  const DownloadAll = ({ formato }) => {
    if (formato === "json") {
      return downloadJson(urls.urlJson);
    } else {
      return downloadTxt(urls.urlTxt);
    }
  };

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
          <SubmitWrapper>
            <Button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Baixar todos
            </Button>
            {count && <DownloadAll formato={formato} />}
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
