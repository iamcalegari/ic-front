import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  StyledLink,
  ContentWrapper,
  DisplayCounter,
  HomeContainer,
  InputTitle,
  InputWrapper,
  MainContainer,
  Slider,
  SubTitle,
  SubmitWrapper,
  Title,
  Select,
} from "./Home.styles.js";

const Home = () => {
  const [count, setCount] = useState(1);
  const urlBase = "https://ic-iot.herokuapp.com/api/vetores/coletarid/";

  const [apiColetarIdLeituras, setApiColetarIdLeituras] = useState(
    `${urlBase}1`
  );

  const fetchData = async (api, option) => {
    try {
      const res = await fetch(api);
      if (res.status === 200) {
        const data = await res.json();
        // setId(data.id);
        localStorage.setItem("vetoresId", data.id);
        localStorage.setItem("vetoresTamanho", data.tamanho);
        localStorage.setItem("vetoresLeitura", data.leitura);
        localStorage.setItem("vetoresLeituraMax", data.leituraMax);
      } else {
        throw "Error";
      }
    } catch (error) {
      console.error(error);
    }
  };
  const leituraMax = localStorage.getItem("vetoresLeituraMax");
  fetchData(apiColetarIdLeituras, "leituras");
  let timeout;
  return (
    <HomeContainer>
      <Title>Interface de Download</Title>
      <SubTitle>Quantidade de vetores</SubTitle>

      <ContentWrapper>
        <MainContainer>
          <InputTitle>
            Quantidade de leituras: <strong>{leituraMax}</strong>
          </InputTitle>

          <InputWrapper>
            <Slider
              type="range"
              min="1"
              max={`${leituraMax}`}
              value={count}
              onChange={(e) => {
                fetchData(urlBase + e.target.valueAsNumber, "leituras");
                setCount(e.target.valueAsNumber);
              }}
            />
            <DisplayCounter
              type="number"
              name="tamanho"
              min="1"
              max={`${leituraMax}`}
              value={count}
              onChange={(e) => {
                fetchData(urlBase + e.target.valueAsNumber, "leituras");
                setCount(e.target.valueAsNumber);
              }}
            />
          </InputWrapper>
        </MainContainer>
        <SubmitWrapper>
          <Link to={`/vetoresFiltrados?leituras=${count}`}>
            <StyledLink>Listar</StyledLink>
          </Link>
        </SubmitWrapper>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
