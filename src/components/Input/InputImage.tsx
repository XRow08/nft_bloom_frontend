import { useEffect, useState } from "react";

/* ICONS IMPORTS */
import { AddImage } from "../Icon/addImage";
import { createImage, findImages } from "@/services/NftService";
import toast from "react-hot-toast";
import { RenderPhotos } from "../RenderPhotos";

export function InputImage({ nameLayer, id }: any) {
  const [imgs, setImgs] = useState([]);

  const handleChange = async (e: any) => {
    try {
      const newFile = e.target.files[0];
      if (newFile.type !== "image/png") {
        return toast.error("Type incorrect, just PNG!", { duration: 3000 });
      }
      const data = new FormData();
      data.append("image", newFile);
      await createImage(data, id, nameLayer);
      findImages(id, nameLayer).then((response) => {
        setImgs(response.data);
      });
      toast.success("Success to add!");
    } catch (error) {
      console.log(error);
      toast.error("Error to add!");
    }
  };

  useEffect(() => {
    findImages(id, nameLayer).then((response) => {
      console.log(response)
      toast.loading("loading images!", { duration: 500 });
      setImgs(response.data);
    });
  }, [nameLayer]);

  return (
    <div className="w-full h-[33rem] overflow-x-scroll scrollbar-thin scrollbar-thumb-brand-scroll scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg px-4">
      <label className="w-full h-1/6 sticky top-0 z-10 rounded-lg bg-brand-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center p-2 hover:scale-[1.01] transition-all duration-300 ease-in-out">
        <div className="w-full h-full border border-[rgba(255,255,255,0.3)] rounded-lg flex justify-center items-center gap-2 font-mplus font-normal text-[16px] text-white">
          <AddImage /> Add images (PNG) to select layer
        </div>
        <input
          name="image"
          id="file-input"
          type="file"
          accept="image/*, .png"
          onChange={handleChange}
          multiple={true}
          hidden={true}
        />
      </label>
      <div className="h-[28rem] w-full grid grid-cols-3 grid-flow-row gap-4 py-4">
        {RenderPhotos(imgs)}
      </div>
    </div>
  );
}
