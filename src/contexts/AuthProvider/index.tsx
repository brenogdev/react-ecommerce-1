import React from "react";
import { IAuthProvider, IContext } from "../../@types/authContext";
import { IUser } from "../../@types/user";
import { loginService } from "../../services/auth.service";
import {
  getUserLocalStorage,
  setUserLocalStorage,
} from "../../utils/userLocalStorage";

export const AuthContext = React.createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = React.useState<IUser | null>();

  async function authenticate(email: string, password: string) {
    const response = await loginService(email, password);
    const payload = { token: response.access_token, email };
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
