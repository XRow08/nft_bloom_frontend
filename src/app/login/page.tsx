"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AlertEnum } from "@/components/Alert";
import { Container } from "@/components/Container";
import { FormLogin } from "@/components/Form/FormLogin";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { useAuthContext } from "@/contexts";
import { LoginResolver } from "@/validations/Login";
import { useRouter } from "next/navigation";

type ILoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ILoginForm>({ resolver: LoginResolver });
  const { login } = useAuthContext();

  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit(values: ILoginForm) {
    try {
      setAlert(undefined);
      await login(values);
      setAlert({
        type: AlertEnum.SUCCESS,
        message: "Successfully Login!",
      });
      reset({ email: "", password: "" });
      router.push("/create-nft");
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: "Incorrect credencials!",
      });
    }
  }

  return (
    <section className="bg-create-nft bg-no-repeat bg-cover flex flex-col items-center h-screen w-full pt-20">
      <Header />
      <div className="w-3/5 bg-gradient-to-l from-[#06FFF0] to-[#03FB75] mt-4 h-[5%] z-50 rounded-t-lg flex justify-center items-center font-mplus font-medium text-[20px]">
        Access the plataform
      </div>
      <Container className="bg-brand-primary flex w-3/5 h-full p-0 rounded-t-none mb-8">
        <div className="h-full w-1/2 rounded-bl-lg drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)]">
          <Image
            src={"/bg_login.png"}
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
                Welcome,
              </Title>
              <Title color="white" className="text-base drop-shadow-none">
                Fill in your email and password to access
              </Title>
            </div>
            <FormLogin
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
