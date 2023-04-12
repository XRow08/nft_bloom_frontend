"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { AlertEnum } from "@/components/Alert";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { FormSignUp } from "@/components/Form/FormSignUp";

import { ISignUpPayload } from "@/interfaces/ISignUpPayload";
import { useAuthContext } from "@/contexts";
import { SignUpResolver } from "@/validations/SignUp";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignUpPayload>({ resolver: SignUpResolver });

  const { signUp } = useAuthContext();

  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit(values: ISignUpPayload) {
    try {
      setAlert(undefined);
      await signUp(values);
      setAlert({
        type: AlertEnum.SUCCESS,
        message: "Account created Successfully!",
      });
      reset({ name: "", email: "", password: "" });
      router.push("/login");
    } catch (error) {
      console.log(error);
      setAlert({
        type: AlertEnum.ERROR,
        message: "Try again please",
      });
    }
  }

  return (
    <section className="bg-create-nft flex flex-col items-center h-screen w-full">
      <Header />
      <div className="w-3/5 bg-gradient-to-l from-[#06FFF0] to-[#03FB75] mt-4 h-[5%] z-50 rounded-t-lg flex justify-center items-center font-mplus font-medium text-[20px]">
        Access the plataform
      </div>
      <Container className="bg-brand-primary flex w-3/5 h-full p-0 rounded-t-none mb-8">
        <div className="h-full w-1/2 rounded-bl-lg drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)]">
          <Image
            src={"/bg_register.png"}
            alt="login"
            className="w-full h-full object-cover rounded-bl-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col w-1/2 p-8 py-12">
          <div className="flex justify-start w-full pb-6 border-b border-[rgba(255,255,255,0.1)]">
            <Image
              src={"/logo-nftbloom.png"}
              alt="login"
              className="w-1/3 h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>

          <div className="h-full flex flex-col justify-center items-start p-8 pr-12 gap-12">
            <div className="flex flex-col gap-4">
              <Title color="white" className="text-3xl drop-shadow-none">
                Create,
              </Title>
              <Title color="white" className="text-base drop-shadow-none">
                Fill in the fields below to create your account
              </Title>
            </div>
            <FormSignUp
              alert={alert}
              type={alert?.type}
              message={alert?.message}
              onSubmit={handleSubmit(onSubmit)}
              control={control}
              errors={errors}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
