"use client";
import { createContext, useContext, useState, useEffect } from "react";

/* IMPORT SERVICES */
import { setBearerToken } from "@/services/Api";
import { AuthService } from "@/services/AuthService";

/* IMPORT HELPERS */
import { StorageHelper } from "@/helpers/StorageHelper";

/* IMPORT INTERFACES */
import { IAuthContext } from "@/interfaces/IAuthContext";
import { ISignUpPayload } from "@/interfaces/ISignUpPayload";
import { IUser } from "@/interfaces/IUser";
import { ILoginPayload } from "@/interfaces/ILoginPayload";

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(
    StorageHelper.getItem("user")
  );
  const [token, setToken] = useState<string | undefined>(
    StorageHelper.getItem("token")
  );

  async function login(payload: ILoginPayload) {
    console.log("function login");
    const { status, data } = await AuthService.login(payload);
    if (status === 200) {
      setToken(data.token);
      setUser(data.user);
      StorageHelper.setItem("user", data.user);
      StorageHelper.setItem("token", data.token);
    }
  }

  async function signUp(payload: ISignUpPayload) {
    const { status, data } = await AuthService.signUp(payload);
    if (status === 201) {
      setUser(data);
    }
  }

  useEffect(() => {
    if (token) {
      setBearerToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, login, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
