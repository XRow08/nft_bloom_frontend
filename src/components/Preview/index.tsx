import { useEffect, useState } from "react";

import { generateImages } from "@/services/NftService";

import { RenderPhotos } from "../RenderPhotos";

import toast from "react-hot-toast";

export function Preview({ id }: any) {
  const [imgs, setImgs] = useState([]);

  async function onSubmitPreview(id: any) {
    try {
      const payload = null;
      const { status, data } = await generateImages(id, payload);
      console.log(status, data);
      if (status === 200) {
        setImgs(data);
        toast.success("Preview loaded!");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Error to load preview!");
    }
  }

  useEffect(() => {
    onSubmitPreview(id);
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-3 grid-flow-row gap-4 py-4">
      {RenderPhotos(imgs)}
    </div>
  );
}
