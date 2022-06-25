import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { getImageUrlWithId } from "../utils/getImageUrl";

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
  loading: boolean;
};

const PokemonContext = createContext({} as PokemonContextData);

const PokemonProvider = ({ children }: ModalProviderProps) => {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      image_src: getImageUrlWithId(data.id),
      stats: data.stats.map((stat: any) => {
        return {
          base_stat: stat.base_stat,
          name: stat.stat.name,
        };
      }),
    };

    setPokemon(newPokemon);
  }

  async function getPokemons() {
    setLoading(true);
    const { data } = await api.get(nextPage ? nextPage : "/pokemon");

    setNextPage(data.next);

    const newPokemons = data.results.map((pokemon: Pokemon) => {
      const id = pokemon.url?.replace(/[^0-9]/g, "").substring(1) || "";
      return {
        id,
        name: pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
        image_src: getImageUrlWithId(id),
      };
    });

    setTimeout(() => {
      setPokemons([...pokemons, ...newPokemons]);
      setLoading(false);
    }, 1000);
    return pokemons;
  }

  return (
    <PokemonContext.Provider
      value={{ loading, getPokemon, pokemon, getPokemons, pokemons }}
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
