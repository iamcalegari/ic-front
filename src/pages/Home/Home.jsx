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
} from "./Home.styles.js";

const Home = () => {
  const [tamanho, setTamanho] = useState(1);
  const [vetores, setVetores] = useState([]);
  const apiColetarId = "https://ic-iot.herokuapp.com/api/vetores/coletarid";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiColetarId);
        if (res.status === 200) {
          const data = await res.json();
          setVetores(data);
          console.log(data);
          localStorage.setItem("vetoresId", data.id);
          localStorage.setItem("vetoresTamanho", data.tamanho);
        } else {
          throw "Error";
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <Title>Interface de Download</Title>
      <SubTitle>Quantidade de vetores</SubTitle>

      <ContentWrapper>
        <MainContainer>
          <InputTitle>
            Quantidade de vetores disponíveis: <strong>{vetores.length}</strong>
          </InputTitle>

          <InputWrapper>
            <Slider
              type="range"
              min="1"
              max={`${vetores.length}`}
              value={tamanho}
              onChange={(e) => setTamanho(e.target.valueAsNumber)}
            />
            <DisplayCounter
              type="number"
              name="tamanho"
              max={`${vetores.length}`}
              value={tamanho}
              onChange={(e) => setTamanho(e.target.valueAsNumber)}
            />
          </InputWrapper>
        </MainContainer>
        <SubmitWrapper>
          <Link to={`/vetoresFiltrados?range=${tamanho}`}>
            <StyledLink>Listar</StyledLink>
          </Link>
        </SubmitWrapper>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;