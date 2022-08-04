import { ReactNode } from "react";
import { IUser } from "./user";

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
    children: ReactNode
}