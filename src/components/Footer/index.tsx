import Image from "next/image";
import Link from "next/link";
import { Title } from "../Title";

export function Footer() {
  return (
    <section className="bg-black h-[15rem] w-full mt-8 gap-4 flex flex-col justify-end items-center pb-8">
      <Image
        width={1000}
        height={1000}
        alt="logo"
        src={"/logo-nftbloom.png"}
        className="w-[10rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
      />
      <div className="flex items-center gap-2">
        <Link
          href={"/create-nft"}
          children={"Create"}
          className="text-white text-lg"
        />
        <div className="rounded-full h-1 w-1 mt-1 bg-[rgba(255,255,255,.5)]" />
        <Link
          href={"/pricing"}
          children={"Pricing"}
          className="text-white text-lg"
        />
        <div className="rounded-full h-1 w-1 mt-1 bg-[rgba(255,255,255,.5)]" />
        <Link
          href={"/history"}
          children={"History"}
          className="text-white text-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Title color="white" children={"© 2023 NFT BLOOM."} />
        <Title color="white" children={"All rights reserved."} />
      </div>
    </section>
  );
}
