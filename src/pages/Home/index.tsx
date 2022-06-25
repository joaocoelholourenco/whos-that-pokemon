import { Button } from "react-bootstrap";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { ModalDetails } from "../../components/ModalDetails";
import { withLoading } from "../../components/WithLoading";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { Container } from "./styles";

export default function Home() {
  const { getPokemons, loading } = usePokemonContext();

  const ListWithLoading = withLoading(List);

  return (
    <>
      <Header />
      <Container>
        <ListWithLoading loading={loading} />

        <Button
          style={{
            width: "300px",
            color: "#FAC705",
            fontSize: "1.25rem",
            alignSelf: "center",
          }}
          disabled={loading}
          onClick={getPokemons}
        >
          Load more Pokemons
        </Button>
      </Container>
      <ModalDetails />
    </>
  );
}
