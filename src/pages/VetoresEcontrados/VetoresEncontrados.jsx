import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

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

  const [url, setUrl] = useState([]);
  const [filename, setFilename] = useState([]);
  console.log(`url[1]: ${url[1]}`);

  const [formato, setFormato] = useState("json");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const range = urlSearchParams.get("range");

  const apiColetarId = `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/${formato}`;
  // const apiColetarId = `http://localhost:3000/api/vetores/${range}/baixarall/${formato}`;
  console.log(apiColetarId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiColetarId);
        if (res.status === 200) {
          const data = await res.json();
          setUrl(data.url);
          setFilename(data.filename);
          console.log(data.url);
          console.log(data.filename);
          localStorage.setItem("url", data.url);
          localStorage.setItem("filename", data.filename);
        } else {
          throw "Error";
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // const urlsDownload = () => {
  //   return url.map((url, index) => {
  //     return (
  //       <a href={url} download={filename[index]}>
  //         {filename[index]}
  //       </a>
  //     );
  //   });
  // };

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
            {/* <StyledLink>Baixar todos</StyledLink> */}
            <button
              onClick={async () => {
                return url.forEach((e, index) => {
                  fetch(e)
                    .then((res) => res.blob())
                    .then((blob) => {
                      saveAs(blob, filename[index]);
                    });
                });
              }}
            >
              {" "}
              Download
            </button>
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
