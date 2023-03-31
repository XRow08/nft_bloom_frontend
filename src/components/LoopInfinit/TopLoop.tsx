import Image from "next/image";

function Item() {
  return (
    <>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/heroes.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/alien_worlds.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/mao.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/rekt.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/helix.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/generative.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/boss.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/metaverse.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="flex justify-center items-center w-40 h-full ">
        <Image
          width={1000}
          height={1000}
          alt="nft"
          src={"/avatars.png"}
          className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    </>
  );
}
export function TopLoop() {
  return (
    <>
      <div className="grid place-items-center overflow-hidden relative w-full h-full after:content-[''] after:bg-gradient-to-l after:from-[rgba(255,255,255,.0)] after:to-[rgba(0,0,0,1)] after:absolute after:h-full after:w-[30%] after:z-10 after:left-0 after:top-0 before:right-0 before:top-0 before:rotate-180 before:content-[''] before:bg-gradient-to-l before:from-[rgba(255,255,255,0)] before:to-[rgba(0,0,0,1)] before:absolute before:h-full before:w-[30%] before:z-10">
        <div className="flex w-[calc(200px * 9)] items-center animate-slide gap-10">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}
