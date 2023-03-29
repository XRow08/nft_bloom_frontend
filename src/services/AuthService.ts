import { ILoginResponse } from "@/interfaces/ILoginResponse";
import { ISignUpPayload } from "@/interfaces/ISignUpPayload";
import { IUser } from "@/interfaces/IUser";
import { ILoginPayload } from "@/interfaces/ILoginPayload";
import { Api } from "./Api";


function login(data: ILoginPayload) {
  return Api.post<ILoginResponse>("/user/login", data);
}

function signUp(data: ISignUpPayload) {
  return Api.post<IUser>("/user/register", data);
}

export const AuthService = {
  login,
  signUp,
};
