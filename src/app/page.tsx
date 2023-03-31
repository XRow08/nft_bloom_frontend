"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* IMPORTS COMPONENTS */
import { AlertEnum } from "@/components/Alert";
import { Button } from "@/components/Button";
import { FormSignUp } from "@/components/Form/FormSignUp";
import { Title } from "@/components/Title";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

/* IMPORTS VALIDATIONS  */
import { SignUpResolver } from "@/validations/SignUp";
import { useAuthContext } from "@/contexts/AuthContext";
import { TopLoop } from "@/components/LoopInfinit/TopLoop";

type ISignUpForm = {
  name: string;
  email: string;
  password: string;
};

export default function Home() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignUpForm>({ resolver: SignUpResolver });

  const { signUp } = useAuthContext();

  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit(values: ISignUpForm) {
    try {
      setAlert(undefined);
      await signUp(values);
      setAlert({
        type: AlertEnum.SUCCESS,
        message: "Cadastro efetuado com sucesso!",
      });
      reset({ name: "", email: "", password: "" });
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: "Houve um erro inesperado. Por favor, tente novamente!",
      });
    }
  }

  return (
    <section className="bg-home bg-no-repeat bg-cover bg-top flex flex-col items-center h-screen">
      <Header />
      {/* <div className="flex w-1/3 flex-col">
        <Button className="w-full h-12 my-2">
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button className="w-full h-12 my-2">
          <Link href={"/create-nft"}>Criar NFT</Link>
        </Button>
      </div>
      <FormSignUp
        onSubmit={handleSubmit(onSubmit)}
        alert={alert}
        type={alert?.type}
        message={alert?.message}
        control={control}
        errors={errors}
      /> */}
      <Container className="flex items-center justify-center w-[90%] h-[60%] mt-4 p-20 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,.3)]">
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
            Create your <span className="font-medium">NFT collection</span>{" "}
            without having to use codes
          </Title>
          <Title
            className="text-base drop-shadow-none font-normal w-[80%]"
            color="white"
          >
            Our platform allows you to organize your collection into
            customizable layers, generate{" "}
            <span className="font-medium">metadata</span>, and export directly
            to the marketplace of your choice. Whether you're a seasoned NFT
            creator or just starting out, our user-friendly interface makes the
            process quick and easy
          </Title>
          <Link href={"/create-nft"}>
            <Button className="flex items-center gap-2 h-12 px-4 text-base font-light font-mplus mt-4">
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
      <Container className="bg-black h-1/4 w-[90%] px-4 mt-6 border border-[rgba(255,255,255,.3)]">
        <TopLoop />
      </Container>
    </section>
  );
}
