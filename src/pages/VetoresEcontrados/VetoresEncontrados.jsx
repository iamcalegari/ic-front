import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import sleep from "../../utils";

import ListaVetores from "../../components/ListaVetores/ListaVetores";
import {
  Button,
  ContentWrapper,
  HeaderList,
  InputWrapper,
  Select,
  // StyledLink,
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
  const [urlJson, setUrlJson] = useState([]);
  const [urlTxt, setUrlTxt] = useState([]);
  const [filenameJson, setFilenameJson] = useState([]);
  const [filenameTxt, setFilenameTxt] = useState([]);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const range = urlSearchParams.get("range");

  // const [apiColetar, setApiColetar] = useState(
  //   `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/json`
  // );

  // async function coletar(rang, format) {}
  const apiColetarJson = `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/json`;
  const apiColetarTxt = `https://ic-iot.herokuapp.com/api/vetores/${range}/baixarall/txt`;
  // const apiColetarId = `http://localhost:3000/api/vetores/${range}/baixarall/${formato}`;
  // console.log(apiColetarId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiColetarJson);
        if (res.status === 200) {
          const data = await res.json();
          setUrlJson(data.url);
          setFilenameJson(data.filename);
        } else {
          throw "Error";
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiColetarTxt);
        if (res.status === 200) {
          const data = await res.json();
          setUrlTxt(data.url);
          setFilenameTxt(data.filename);
        } else {
          throw "Error";
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(`url[1]: ${urlJson[1]}`);
  console.log(`url[1]: ${urlTxt[1]}`);
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
            <Button
              onClick={async () => {
                if (formato === "json") {
                  return urlJson.forEach(async (e, index) => {
                    fetch(e)
                      .then((res) => {
                        return res.blob();
                      })
                      .then(await sleep(1000))
                      .then((blob) => {
                        saveAs(blob, `${filenameJson[index]}`);
                      });
                  });
                } else {
                  return urlTxt.forEach(async (e, index) => {
                    fetch(e)
                      .then((res) => {
                        return res.blob();
                      })
                      .then(await sleep(2000))
                      .then((blob) => {
                        saveAs(blob, `${filenameTxt[index]}`);
                      });
                  });
                }
              }}
            >
              Baixar todos
            </Button>
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
