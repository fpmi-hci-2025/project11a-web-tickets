import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(saved);
  }, []);

  function login() {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
