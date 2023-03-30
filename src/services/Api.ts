import axios from "axios";

const url = process.env.SERVER_URL;

const baseURL = url || url;

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
