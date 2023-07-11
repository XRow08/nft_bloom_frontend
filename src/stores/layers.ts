import { ILayer } from "@/interfaces";
import { create } from "zustand";

interface useLayersStore {
  layersOrder: ILayer[];
  setLayersOrder: (layersOrder: ILayer[]) => void;
  nameLayer: string;
  setNameLayer: (nameLayer: string) => void;
  selectedItems: ILayer[];
  setSelectedItems: (selectedItems: ILayer[]) => void;
}

export const useLayersStore = create<useLayersStore>((set) => ({
  layersOrder: [],
  setLayersOrder: (layersOrder: ILayer[]) => set({ layersOrder }),
  nameLayer: '',
  setNameLayer: (nameLayer: string) => set({nameLayer}),
  selectedItems: [],
  setSelectedItems: (selectedItems: ILayer[]) => set({selectedItems})
}));
