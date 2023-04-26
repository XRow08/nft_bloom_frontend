import { useEffect, useState } from "react";

import { generateImages } from "@/services/NftService";
import { Container } from "../Container";
import { Title } from "../Title";

import toast from "react-hot-toast";
import Image from "next/image";

export function Preview({ id }: any) {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    async function onSubmitPreview(id: any) {
      try {
        const payload = null;
        const { status, data } = await generateImages(id, payload);
        if (status === 200) {
          setImgs(data);
          toast.success("Preview loaded!");
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
        toast.error("Error to load preview!");
      }
    }
    onSubmitPreview(id);
  }, [id]);

  function RenderPhotos(imgs: any) {
    return imgs.map((photo: any) => {
      const url = photo.split("/")[6];
      const name = url.split(".")[0];
      console.log(url);
      return (
        <Container
          key={photo}
          className="h-[15em] w-full flex flex-col items-start justify-start p-2 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] "
        >
          <img
            alt="image"
            src={photo}
            key={photo}
            height={80}
            width={100}
            className="h-[80%] w-[100%] mt-2 object-cover rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] bg-brand-primary"
          />
          <Title children={name} color="white" className="mt-2" />
        </Container>
      );
    });
  }

  return (
    <div className="h-[33.6rem] w-[85%] grid grid-cols-4 self-center grid-flow-row gap-4 p-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-brand-scroll scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
      {RenderPhotos(imgs)}
    </div>
  );
}
