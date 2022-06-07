import styled from "styled-components";

export const Content = styled.ul`
  background: #151223;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, min(18rem));
  justify-content: center;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;

  background: #151223;
`;
