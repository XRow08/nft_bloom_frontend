"use client";
import Link from "next/link";
import Image from "next/image";

/* IMPORTS COMPONENTS */
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { TopLoop } from "@/components/LoopInfinit/TopLoop";
import { DynamicPrice } from "@/components/DynamicPrice";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <section className="bg-home bg-no-repeat bg-cover bg-top flex flex-col items-center h-full scrollbar-none scrollbar-w-0 pt-20">
      <section className="h-screen w-full flex flex-col items-center scrollbar-none scrollbar-w-0">
        <Header />
        <Container className="flex items-center justify-center w-[90%] h-[60%] mt-4 p-20 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,.1)] scrollbar-none scrollbar-w-0">
          <div className="w-full">
            <Image
              width={1000}
              height={1000}
              alt="mockup"
              src={"/pc-mockup.png"}
              className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-full"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-2 -ml-12">
            <div className="flex items-center gap-4 w-32">
              <Image
                width={1000}
                height={1000}
                alt="logo"
                src={"/logo-nftbloom.png"}
                className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              />
              <Image
                width={1000}
                height={1000}
                alt="nft"
                src={"/nft.png"}
                className="w-8 mb-2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              />
            </div>
            <Title
              className="text-[35px] drop-shadow-none font-normal w-[80%]"
              color="white"
            >
              Create your <span className="font-bold">NFT collection</span>{" "}
              without having to use codes
            </Title>
            <Title
              className="text-base drop-shadow-none font-normal w-[80%]"
              color="white"
            >
              Our platform allows you to organize your collection into
              customizable layers, generate{" "}
              <span className="font-bold">metadata</span>, and export directly
              to the marketplace of your choice. Whether you're a seasoned NFT
              creator or just starting out, our user-friendly interface makes
              the process quick and easy
            </Title>
            <Link href={"/create-nft"}>
              <Button className="flex items-center gap-2 h-12 px-4 text-base font-normal font-mplus mt-4 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                <Image
                  width={1000}
                  height={1000}
                  alt="nft"
                  src={"/rocketIcon.png"}
                  className="w-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                />
                Create your NFT collection
              </Button>
            </Link>
          </div>
        </Container>
        <Container className="bg-black h-1/4 w-[90%] px-4 mt-6 border border-[rgba(255,255,255,.1)]">
          <TopLoop />
        </Container>
      </section>

      <DynamicPrice />

      <Footer />
    </section>
  );
}
