import styled from "styled-components";
interface Props {
  image_src: string;
}

export const Container = styled.div<Props>`
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
  background-image: url(${(p) => p.image_src});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    animation: loading 0.5s linear;
    cursor: pointer;
    background-size: contain;
  }
`;
