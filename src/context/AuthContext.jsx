import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
    toast.success("Vous vous êtes déconnecté de votre compte.");
  };

  const login = (formLogin) => {
    if (!formLogin.email.trim()) {
      toast.error("Email Is Required");
      return;
    }
    if (!formLogin.password.trim()) {
      toast.error("Password Is Required");
      return;
    }
    if (formLogin.password.trim().length < 8) {
      toast.error("Password Not Valid");
      return;
    }

    if (!user) {
      toast.error("Veuillez vous inscrire au préalable.");
      return;
    }

    if (
      user.email === formLogin.email &&
      user.password === formLogin.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      toast.success("Connexion réussie");
      navigate("/");
    } else {
      toast.error("Email ou mot de passe incorrect");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
