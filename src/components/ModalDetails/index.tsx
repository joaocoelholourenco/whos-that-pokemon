import { Modal } from "react-bootstrap";
import { useModalContext } from "../../contexts/ModalContext";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { Content, Info } from "./styles";

export function ModalDetails() {
  const { isOpen, closeModal } = useModalContext();
  const { pokemon } = usePokemonContext();

  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal.Header
        style={{ background: "#151223", color: "#fff" }}
        closeButton
      >
        <Modal.Title>{pokemon.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#151223" }}>
        <Content>
          <img src={pokemon.image_src} alt={pokemon.name} />
          <Info>
            <h3>Info</h3>
            <ul>
              <li>
                <span>{pokemon.base_experience}</span>
                <p>Experience</p>
              </li>
              <li>
                <span>{pokemon.height}</span>
                <p>Height</p>
              </li>
            </ul>
            <hr />
            <h3>Abilities</h3>
            <ul>
              {pokemon.stats?.map((stat: any) => {
                return (
                  <li key={stat.name}>
                    <span>{stat.base_stat}</span>
                    <p>{stat.name}</p>
                  </li>
                );
              })}
            </ul>
          </Info>
        </Content>
      </Modal.Body>
    </Modal>
  );
}
