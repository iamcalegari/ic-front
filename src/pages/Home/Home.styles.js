import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h3`
  font-variant: small-caps;
  font-style: italic;
`;

export const ContentWrapper = styled.div`
  border-radius: 1.2rem;
  padding: 1rem;
`;

export const MainContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 1.2rem;
  padding: 2rem;
  opacity: 0.8;
`;

export const InputTitle = styled.h3`
  font-variant: small-caps;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 1.2rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Slider = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1.2rem;
  margin-right: 1rem;
  width: 100%;
`;

export const DisplayCounter = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1.2rem;
  width: 5rem;
  text-align: center;
  font-size: 2rem;
`;

export const SubmitWrapper = styled.div`
  border-radius: 1.2rem;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #03388a;
  border-radius: 0.7rem;
  padding: 0.5rem 0rem 0.5rem 0rem;
  width: 100%;
  height: 2rem;
  background-color: rgba(13, 110, 253, 0.7);
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

export const Select = styled.select`
  width: 5rem;
  height: 3.3rem;
  border: 1px solid #ccc;
  border-radius: 0.7rem;
  padding: 0.5rem;
  margin-left: 1rem;
  background-color: #fff;
  font-size: 1rem;
`;
