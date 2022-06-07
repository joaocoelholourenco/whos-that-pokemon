import { Button } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";
import { Container, Content } from "./styles";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { FomikInput } from "../../components/FomikInput";

type SignInFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { signIn } = useAuthContext();

  function handleSubmit(values: SignInFormData) {
    signIn(values);
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  return (
    <Container>
      <Content>
        <img src="/images/Pokemon-Logo.png" alt="" />
        <Formik
          initialValues={initialValues}
          validationSchema={signInFormSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => {
            return (
              <Form>
                <FomikInput type="email" label="Email" name="email" />
                <FomikInput type="password" label="Password" name="password" />

                <Button
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                    background: "#3D68BB",
                    color: "#FAC705",
                  }}
                  type="submit"
                  disabled={!isValid}
                >
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Content>
    </Container>
  );
}
