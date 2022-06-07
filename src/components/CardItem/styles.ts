import styled from "styled-components";
interface Props {
  image_src: string;
}

export const Container = styled.div<Props>`
  @keyframes loading {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  background-image: url(${(p) => p.image_src});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    animation: loading 0.5s ease;
    cursor: pointer;
    background-size: contain;
  }
`;
