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

  const [vetoresLeitura, setVetoresLeitura] = useState(
    localStorage.getItem("vetoresLeitura").split(",")
  );

  const [formato, setFormato] = useState("json");

  const [count, setCount] = useState(0);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const leituras = urlSearchParams.get("leituras");

  const urls = coletarUrls(leituras);
  console.log(urls);

  const downloadJson = (urls) => {
    return urls.map((url, i) => {
      console.log(url);
      return (
        <div>
          <iframe src={url} key={i}></iframe>
        </div>
      );
    });
  };
  const downloadTxt = (urls) => {
    return urls.map((url, i) => {
      console.log(url);
      return (
        <div>
          <iframe src={url} key={i}></iframe>
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
      <Title>Vetores encontrados: {vetoresLeitura.length}</Title>
      <Subtitle>Download</Subtitle>

      <ContentWrapper>
        <View>
          <HeaderList>Lista de Vetores</HeaderList>
          <ListaVetores
            vetoresId={vetoresId}
            vetoresLeitura={vetoresLeitura}
            vetoresTamanho={vetoresTamanho}
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
            <div style={{ display: "none" }}>
              {count && <DownloadAll formato={formato}></DownloadAll>}
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
