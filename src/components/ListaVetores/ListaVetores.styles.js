import styled from "styled-components";

export const ListContainer = styled.div`
  max-height: 25rem;
  background-color: #fff;
  overflow-y: auto;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const List = styled.div``;

export const ListItem = styled.div`
  border-radius: 0.7rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1.3rem;
  background-color: rgba(229, 229, 229, 0.4);
  & {
    margin-top: 0.3rem;
  }
`;

export const Text = styled.text`
  padding: 1rem rem 1rem 0rem;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: #001e82;
`;
