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
  const [leitura, setLeitura] = useState(1);
  const [count, setCount] = useState(1);
  const apiColetarId =
    "https://ic-iot.herokuapp.com/api/vetores/coletarid/todas";

  Promise.all([
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(apiColetarId);
          if (res.status === 200) {
            const data = await res.json();
            // setId(data.id);
            setLeitura(data.leitura);
            localStorage.setItem("vetoresId", data.id);
            localStorage.setItem("vetoresTamanho", data.tamanho);
            localStorage.setItem("vetoresLeitura", data.leitura);
          } else {
            throw "Error";
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []),
  ]);

  const leiturasOptions = (leitura) => {
    return leitura
      .map((leitura, index) => {
        return (
          <option key={index} value={leitura}>
            {leitura}
          </option>
        );
      })
      .reverse();
  };
  console.log(`leitura: ${Math.max(...leitura)}`);
  return (
    <HomeContainer>
      <Title>Interface de Download</Title>
      <SubTitle>Quantidade de vetores</SubTitle>

      <ContentWrapper>
        <MainContainer>
          <InputTitle>
            Quantidade de leituras: <strong>{Math.max(leitura)}</strong>
          </InputTitle>

          <InputWrapper>
            <Slider
              type="range"
              min="1"
              max={`${leitura[leitura.length - 1]}`}
              value={count}
              onChange={(e) => setCount(e.target.valueAsNumber)}
            />
            <DisplayCounter
              type="number"
              name="tamanho"
              max={`${leitura[leitura.length - 1]}`}
              value={count}
              onChange={(e) => setCount(e.target.valueAsNumber)}
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
