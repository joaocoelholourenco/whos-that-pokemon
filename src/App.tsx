import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { ReactElement } from "react";
import { ModalProvider } from "./contexts/ModalContext";
import { PokemonProvider } from "./contexts/PokemonContext";

interface CustomRouteProps {
  children: ReactElement;
}

const CustomRoute = ({ children }: CustomRouteProps) => {
  const { authenticated } = useAuthContext();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <PokemonProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <CustomRoute>
                    <Home />
                  </CustomRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </PokemonProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
