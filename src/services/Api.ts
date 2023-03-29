import axios from "axios";

const url = "http://localhost:3001";

const baseURL = url || "http://localhost:3001";

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
