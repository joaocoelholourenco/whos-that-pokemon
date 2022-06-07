import { ErrorMessage, Field } from "formik";
import { Container } from "./styles";

interface FormikInputProps {
  type: string;
  name: string;
  label: string;
}

export function FomikInput({ type, label, name, ...rest }: FormikInputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={name} {...rest} />
      <ErrorMessage name={name} component="span" />
    </Container>
  );
}
