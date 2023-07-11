import { IEditLayer } from "@/interfaces/IEditLayer";
import { ICreateLayer } from "./../interfaces/ICreateLayer";
import { IDeleteLayer } from "./../interfaces/IDeleteLayer";
import { Api } from "./Api";
import { ICreateNFT } from "@/interfaces/ICreateNFT";
import { ILayer } from "@/interfaces/ILayers";

export function createLayer(data: ICreateLayer) {
  return Api.post("/nft/create-layer", data);
}

export function editLayer(data: IEditLayer) {
  return Api.put("/nft/edit-layer", data);
}

export function deleteLayer(data: IDeleteLayer) {
  return Api.post("/nft/delete-layer", data);
}

export function findAll(id: string): Promise<{data: ILayer[] | number}> {
  return Api.get(`/nft/get-layers/${id}`);
}

export function createImage(data: any, id: string, name: string) {
  return Api.post(`/nft/layer-image/${id}/${name}`, data);
}

export function findImages(id: string, name: string) {
  return Api.get(`/nft/get-layers/${id}/${name}`);
}

export function generateImages(id: string, data: any) {
  return Api.post(`/nft/start-preview/${id}`, data);
}

export function createNFT(data: ICreateNFT) {
  return Api.post(`/nft/create-nft`, data);
}
