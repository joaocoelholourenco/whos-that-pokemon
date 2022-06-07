import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: row;
  }

  h3 {
    color: #fff;
  }

  hr {
    color: #fff;
  }

  img {
    height: 250px;
    width: 250px;
  }
`;

export const Info = styled.div`
  ul {
    margin: 0;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }

    li {
      list-style-type: none;
      color: #fff;
      text-align: center;
      & + li {
        margin-left: 1rem;
      }

      span {
        font-weight: 600;
      }
    }
  }
`;
export const Stats = styled.div``;
