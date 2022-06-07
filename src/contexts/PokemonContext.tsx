import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ModalProviderProps {
  children: ReactNode;
}

type Pokemon = {
  id: string;
  name: string;
  image_src: string;
  height?: string;
  abilities?: [];
  stats?: [];
  base_experience?: string;
  url?: string;
};

type PokemonContextData = {
  getPokemon: (url: string) => Promise<void>;
  getPokemons: () => Promise<Pokemon[]>;
  pokemon: Pokemon;
  pokemons: Pokemon[];
};

const PokemonContext = createContext({} as PokemonContextData);

const PokemonProvider = ({ children }: ModalProviderProps) => {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState<string>("");

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemon(id: string) {
    const { data } = await api.get(`pokemon/${id}`);
    const newPokemon = {
      id: data.id,
      abilities: data.abilities.map((ability: any) => ability.name),
      height: data.height,
      name: data.name,
      base_experience: data.base_experience,
      image_src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      stats: data.stats.map((stat: any) => {
        return {
          base_stat: stat.base_stat,
          name: stat.stat.name,
        };
      }),
    };
    console.log(newPokemon);
    setPokemon(newPokemon);
  }

  async function getPokemons() {
    let response;
    if (!nextPage) {
      response = await api.get("/pokemon");
    } else {
      response = await api.get(nextPage);
    }
    const { data } = response;
    setNextPage(data.next);
    const newPokemons = data.results.map((pokemon: Pokemon) => {
      const id = pokemon.url?.replace(/[^0-9]/g, "").substring(1);
      return {
        id,
        name: pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
        image_src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });
    setPokemons([...pokemons, ...newPokemons]);
    return pokemons;
  }

  return (
    <PokemonContext.Provider
      value={{ getPokemon, pokemon, getPokemons, pokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  return context;
};

export { usePokemonContext, PokemonProvider };
