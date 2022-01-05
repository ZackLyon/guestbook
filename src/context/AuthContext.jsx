import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    const didLoginSucceed =
      username === process.env.USERNAME_AUTH &&
      password === process.env.PASSWORD_AUTH;

    if (didLoginSucceed) setUser(username);

    return didLoginSucceed;
  };

  const logout = (loggingOut) => {
    setUser(null);
    loggingOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error(
      'useAuth needs to be used on a descendant element of the Provider'
    );

  return context;
};

export { AuthProvider, useAuth };
