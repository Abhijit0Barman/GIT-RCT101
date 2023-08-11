import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true); //default value should be false

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
