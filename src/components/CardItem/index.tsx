import { Card } from "react-bootstrap";
import { useModalContext } from "../../contexts/ModalContext";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { Container } from "./styles";

type Pokemon = {
  id: string;
  name: string;
  image_src: string;
  url?: string;
};

interface CardProps {
  pokemon: Pokemon;
}

export function CardItem({ pokemon }: CardProps) {
  const { openModal } = useModalContext();
  const { getPokemon } = usePokemonContext();

  function handleDetalis() {
    openModal();
    getPokemon(pokemon.id);
  }

  return (
    <Container image_src={pokemon.image_src}>
      <Card
        onClick={handleDetalis}
        className="mb-2"
        style={{
          width: "18rem",
          minWidth: "18rem",
          border: "none",
          borderRadius: "1rem",
          background: "#5a576c34",
          backdropFilter: "blur(50px)",
          color: "white",
        }}
      >
        <Card.Img src={pokemon.image_src} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}
