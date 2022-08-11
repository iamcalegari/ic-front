import styled from "styled-components";

export const VetoresEncontradosContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h4`
  font-variant: small-caps;
  font-style: italic;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
`;

export const HeaderList = styled.p`
  border-bottom: 1px solid #ccc;
  background-color: #f7f7f7;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  color: #282c34;
  padding: 1rem 0rem 1rem 2rem;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const VetoresContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  margin-bottom: 1rem;
  opacity: 0.8;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
  }
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

export const SubmitWrapper = styled.a`
  border-radius: 1.2rem;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

export const StyledLink = styled.div`
  font-family: Arial, Helvetica, sans-serif;
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
