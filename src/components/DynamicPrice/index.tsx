"use client";
import { useState } from "react";
import { Container } from "../Container";
import { Title } from "../Title";
import Image from "next/image";
import "../Input/index.css";
import Link from "next/link";

export function DynamicPrice() {
  const [value, setValue] = useState(1);
  function handleChange(e: any) {
    const value = e.target.value;
    setValue(value);
  }

  return (
    <Container className="flex items-center justify-center w-[90%] h-[70vh] py-12 bg-[rgba(0,0,0,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,.1)]">
      <Container className="flex flex-col w-[50%] h-full p-4 bg-[rgba(0,0,0,.3)] border border-[rgba(255,255,255,.1)]">
        <Title
          className="text-xl drop-shadow-none flex items-center gap-2 font-bold"
          color="white"
        >
          Dynamic price
          <div className="rounded-full h-1 w-1 mt-1 bg-[#03FB75]" />
        </Title>
        <Title
          className="text-[16px] drop-shadow-none font-normal w-[90%] mt-4"
          color="white"
        >
          Our quotation system is based on a fixed price for each NFT you
          generate, so you can create the amount of NFT you want, enter the
          amount of NFT you want to create for your collection and the price
          will appear:
        </Title>
        <div className="absolute w-full h-full flex flex-col justify-center items-center mt-4">
          <label className="h-12 w-[30%] self-center bg-transparent border-b border-[rgba(255,255,255,.1)] flex justify-end items-baseline text-[14px] font-normal text-white">
            <input
              value={value}
              onChange={(e) => handleChange(e)}
              min={0}
              type="number"
              className="bg-transparent outline-none w-full h-full text-[30px] font-medium font-mplus"
            />
            <span className="">NFTs</span>
          </label>
          <div className="h-12 w-[30%] bg-[rgba(0,0,0,.2)] flex justify-center items-center gap-2 text-white border border-[rgba(255,255,255,.1)] rounded-lg mt-4">
            Price: <span className="text-[#03FB75]"> ${value * 0.04}</span>
          </div>
          <Link
            href={"/create-nft"}
            className="h-12 w-[25%] bg-[rgba(0,0,0,.2)] flex justify-center items-center gap-2 text-white border border-[rgba(255,255,255,.3)] rounded-lg mt-12"
          >
            Start creating
          </Link>
        </div>
        <Image
          src={"/selo.png"}
          width={1000}
          height={1000}
          alt={"selo"}
          className="w-24 absolute bottom-4 right-4"
        />
      </Container>
    </Container>
  );
}
