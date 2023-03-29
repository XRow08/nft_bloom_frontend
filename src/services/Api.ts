import axios from "axios";

const url = "https://nftbloom.onrender.com";

const baseURL = url || "https://nftbloom.onrender.com";

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
}
