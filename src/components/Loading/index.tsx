import { Spinner } from "react-bootstrap";

export function Loading() {
  return (
    <Spinner
      animation="grow"
      variant="primary"
      style={{ alignSelf: "center", margin: "20px" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
