import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background: #151223;
`;

export const Content = styled.div`
  background: #211e32;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 2rem 1rem;
  color: #fff;

  img {
    height: 90px;
  }
  form {
    label {
      margin-top: 0.75rem;
    }
  }
`;
