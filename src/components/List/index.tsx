import { usePokemonContext } from "../../contexts/PokemonContext";
import { CardItem } from "../CardItem";
import { Content } from "./styles";

export function List() {
  const { pokemons } = usePokemonContext();

  return (
    <Content>
      {pokemons &&
        pokemons.map((pokemon) => {
          return <CardItem key={pokemon.id} pokemon={pokemon} />;
        })}
    </Content>
  );
}
