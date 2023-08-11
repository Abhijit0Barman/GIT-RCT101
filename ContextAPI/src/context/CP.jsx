import { createContext, useState } from "react";

export const AppContext = createContext();

export const CP = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  // const obj = { isAuth: isAuth };
  // return <AppContext.Provider value={obj}>{children}</AppContext.Provider>;

  // return <AppContext.Provider value={isAuth}>{children}</AppContext.Provider>;
  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AppContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
