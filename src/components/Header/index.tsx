import { Button } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";
import { Container } from "./styles";

export function Header() {
  const { signOut } = useAuthContext();
  return (
    <Container>
      <img src="/images/Pokemon-Logo.png" alt="" />
      <Button onClick={signOut}>SignOut</Button>
    </Container>
  );
}
