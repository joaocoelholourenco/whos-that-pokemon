import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInFormProps {
  email: string;
  password: string;
}

type AuthContextData = {
  authenticated: boolean;
  signIn: (values: SignInFormProps) => void;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authentication = localStorage.getItem("authentication");

    console.log(authentication);

    if (authentication) {
      setAuthenticated(true);
      navigate("/");
    }
  }, [authenticated]);

  function signIn({ email, password }: SignInFormProps): void {
    try {
      if (email !== "joao@gmail.com") throw new Error("Usuário não encontrado");
      if (password !== "123456") throw new Error("Senha ou email incorreto");

      localStorage.setItem("authentication", "fake-token");

      setAuthenticated(true);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  function signOut(): void {
    setAuthenticated(false);

    localStorage.removeItem("authentication");

    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuthContext, AuthProvider };
