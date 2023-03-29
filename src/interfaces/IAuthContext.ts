import { ILoginPayload } from "@/interfaces/ILoginPayload";
import { ISignUpPayload } from "./ISignUpPayload";
import { IUser } from "./IUser";

export interface IAuthContext {
  user?: IUser;
  setUser: (user: IUser | undefined) => void;
  token?: string;
  setToken: (token: string | undefined) => void;
  login: (payload: ILoginPayload) => Promise<void>;
  signUp: (payload: ISignUpPayload) => Promise<void>;
}
