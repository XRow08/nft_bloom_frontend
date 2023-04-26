import Image from "next/image";
import { Container } from "../Container";
import { Title } from "../Title";

export function RenderPhotos(imgs: any) {
  return imgs.map((photo: any) => {
    const url = photo.split("/")[6];
    const name = url?.split(".")[0];
    return (
      <Container
        key={photo}
        className="h-[15em] w-full flex flex-col items-start justify-start p-2 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] "
      >
        <Image
          alt="image"
          src={photo}
          key={photo}
          height={500}
          width={500}
          className="h-[90%] w-[100%] mt-2 object-cover rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] bg-brand-primary"
        />
        <Title children={name} color="white" className="my-1" />
      </Container>
    );
  });
}
