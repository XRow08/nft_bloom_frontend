import axios from "axios";

const url = "https://nftbloom.onrender.com";
/* const url = "http://localhost:3333"; */

const baseURL = url || url;

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
