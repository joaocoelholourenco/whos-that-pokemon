import { Button } from "react-bootstrap";
import { CardItem } from "../../components/CardItem";
import { Header } from "../../components/Header";
import { ModalDetails } from "../../components/ModalDetails";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { Container, Content } from "./styles";

export default function Home() {
  const { pokemons, getPokemons } = usePokemonContext();

  return (
    <>
      <Header />
      <Container>
        <Content>
          {pokemons &&
            pokemons.map((pokemon) => {
              return <CardItem key={pokemon.id} pokemon={pokemon} />;
            })}
        </Content>
        <Button
          style={{
            width: "300px",
            color: "#FAC705",
            fontSize: "1.25rem",
            alignSelf: "center",
          }}
          onClick={getPokemons}
        >
          Load more...
        </Button>
      </Container>
      <ModalDetails />
    </>
  );
}
