import React, { useEffect, useState } from "react";

import ListaVetores from "../../components/ListaVetores/ListaVetores";
import coletarUrls from "../../components/ColetarUrls"

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
  const baseUrl = "https://ic-iot.herokuapp.com/";

  const urlSearchParams = new URLSearchParams(window.location.search);
  const leituras = urlSearchParams.get("leituras");

  const [id, setId] = useState(null);
  const [leitura, setLeitura] = useState(null);
  const [tamanho, setTamanho] = useState(null);

  const [count, setCount] = useState(0);
  const [formato, setFormato] = useState('json');



  useEffect(() => {
    fetch(baseUrl+'api/vetores/coletarid/'+leituras, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((result) => {
      // console.log('Success:', result);
      setId(result.id);
      setLeitura(result.leitura);
      setTamanho(result.tamanho);
    })
    .catch((error) => {
      console.error('Error:', error);
    });    
  },[]);

   
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

const DownloadAll = ( formato, urls ) => {
  if (formato === "json") {
    return downloadJson(urls);
  } else {
    return downloadTxt(urls);
  }
};

  useEffect(()=>{
    <DownloadAll formato={formato} url={()=> coletarUrls({
      vetoresId:id,
      vetoresLeitura:leitura,
      format:formato,
    })
}></DownloadAll>    
  },[count])

  

  return (
    <VetoresEncontradosContainer>
      {id && <Title>Vetores encontrados: {id.length}</Title>}
      <Subtitle>Download</Subtitle>

      <ContentWrapper>
        <View>
          <HeaderList>Lista de Vetores</HeaderList>
          {id && <ListaVetores
          vetoresId={id}
          vetoresLeitura={leitura}
          format={formato}
          />
        }
       
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
              {count && <DownloadAll formato={formato} url={()=> coletarUrls({
                        vetoresId:id,
                        vetoresLeitura:leitura,
                        format:formato,
                      })
              }></DownloadAll>}
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
