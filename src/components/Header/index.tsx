import Link from "next/link";
import { Button } from "../Button";
import { Wallet } from "../Icon/wallet";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-[90%] h-[8vh] bg-transparent border-b border-b-[rgba(255,255,255,0.3)] flex justify-end items-center">
      <div className="flex w-full h-full items-center justify-between">
        <div className="w-[17rem]"></div>
        <div className="flex justify-center items-center w-full gap-4">
          <Link href={"/create-nft"} className="font-mplus font-medium text-white">
            Create
          </Link>
          <Link href={"/"} className="w-[8rem] mx-4">
            <Image
              src="/logo-nftbloom.png"
              alt="logo"
              width={400}
              height={100}
              className="w-full h-full self-center object-cover"
            />
          </Link>
          <Link href={"/pricing"} className="font-mplus font-medium text-white">
            Pricing
          </Link>
        </div>
        <Button className="w-[17rem] h-3/5 flex items-center justify-between p-2 text-[18px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] font-normal bg-gradient-to-l from-[#0075FF] to-[#2603FB]">
          <Wallet />
          Connect Wallet
          <Image
            src="/monkey.png"
            alt="monkey"
            width={100}
            height={100}
            className="w-[20%]"
          />
        </Button>
      </div>
    </header>
  );
}
