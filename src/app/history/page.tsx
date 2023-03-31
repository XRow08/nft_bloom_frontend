import Image from "next/image";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

export default function History() {
  return (
    <section className="h-full w-full bg-history bg-no-repeat bg-cover flex flex-col items-center gap-4">
      <Header />
      <Container className="w-[90%] h-[70vh] p-20 bg-[rgba(0,0,0,0.5)] gap-20 flex items-center justify-between backdrop-blur-xl border border-[rgba(255,255,255,.1)]">
        <div className="w-[40%] flex flex-col gap-6">
          <Image
            width={1000}
            height={1000}
            alt="logo"
            src={"/logo-nftbloom.png"}
            className="w-[10rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
          <Title
            color="white"
            className="text-4xl font-normal drop-shadow-none"
            children={"Our mission and history"}
          />
          <Title color="white" className="text-base drop-shadow-none">
            Our company was founded in 2023 with the aim of democratizing the
            NFT market, making it more accessible and easier for creators. We
            believe that everyone should have the opportunity to create and
            market their own NFT collections, regardless of their background or
            technical knowledge.
            <br /> <br />
            With this in mind, we have developed an intuitive and secure online
            system that allows users to create and generate their own NFTs at an
            extremely affordable price. Our platform offers features like
            customizing tokens, creating collections, transferring ownership,
            and more, all with an easy-to-use interface and streamlined token
            generation process.
            <br /> <br />
            Since launch, we've helped many artists, musicians, writers and
            other creators join the world of NFTs by providing them with a
            simple and affordable way to get involved in the marketplace. We are
            committed to continuing to improve and update our platform to meet
            the ever-evolving needs of our users, always keeping our focus on
            making the process of creating and selling NFTs easier and more
            accessible for everyone.
          </Title>
        </div>
        <div className="w-1/2">
          <Image
            width={1000}
            height={1000}
            alt="logo"
            src={"/people.png"}
            className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
      </Container>
      <Container className="w-[90%] h-[70vh] p-20 bg-[rgba(0,0,0,0.5)] gap-20 flex items-center justify-between backdrop-blur-xl border border-[rgba(255,255,255,.1)]">
        <div className="w-[40%] flex flex-col gap-6">
          <Image
            width={1000}
            height={1000}
            alt="logo"
            src={"/logo-nftbloom.png"}
            className="w-[10rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
          <Title
            color="white"
            className="text-4xl font-normal drop-shadow-none"
            children={"Our mission and history"}
          />
          <Title color="white" className="text-base drop-shadow-none">
            Our company was founded in 2023 with the aim of democratizing the
            NFT market, making it more accessible and easier for creators. We
            believe that everyone should have the opportunity to create and
            market their own NFT collections, regardless of their background or
            technical knowledge.
            <br /> <br />
            With this in mind, we have developed an intuitive and secure online
            system that allows users to create and generate their own NFTs at an
            extremely affordable price. Our platform offers features like
            customizing tokens, creating collections, transferring ownership,
            and more, all with an easy-to-use interface and streamlined token
            generation process.
            <br /> <br />
            Since launch, we've helped many artists, musicians, writers and
            other creators join the world of NFTs by providing them with a
            simple and affordable way to get involved in the marketplace. We are
            committed to continuing to improve and update our platform to meet
            the ever-evolving needs of our users, always keeping our focus on
            making the process of creating and selling NFTs easier and more
            accessible for everyone.
          </Title>
        </div>
        <div className="w-1/2">
          <Image
            width={1000}
            height={1000}
            alt="logo"
            src={"/people.png"}
            className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
      </Container>
      <Footer />
    </section>
  );
}
