import axios from "axios";

const url = "http://192.168.1.77:3333";

const baseURL = url || "http://192.168.1.77:3333";

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
