import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [authenticated, setAuthenticated] = useState(true);

  function signIn({ email, password }: SignInFormProps): void {
    setAuthenticated(true);

    navigate("/");
  }
  function signOut(): void {
    setAuthenticated(false);

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
