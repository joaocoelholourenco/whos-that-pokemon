import { Button } from "react-bootstrap";
import { CardItem } from "../../components/CardItem";
import { Header } from "../../components/Header";
import { ModalDetails } from "../../components/ModalDetails";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { Container } from "./styles";

export default function Home() {
  const { pokemons, getPokemons } = usePokemonContext();

  return (
    <>
      <Header />
      <Container>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <CardItem key={pokemon.id} pokemon={pokemon} />;
          })}
        <Button onClick={getPokemons}>Load more...</Button>
      </Container>
      <ModalDetails />
    </>
  );
}
