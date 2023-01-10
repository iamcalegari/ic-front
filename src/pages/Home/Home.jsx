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
  const [dataApi, setDataApi] = useState({});

  const baseUrl = "https://apic.onrender.com/api/vetores/coletarid/";

  useEffect(() => {
    fetch(baseUrl + "todas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setDataApi(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const { leituraMax } = dataApi;

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
