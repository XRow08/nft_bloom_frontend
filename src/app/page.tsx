"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* IMPORTS COMPONENTS */
import { AlertEnum } from "@/components/Alert";
import { Button } from "@/components/Button";
import { FormSignUp } from "@/components/Form/FormSignUp";
import { Header } from "@/components/Header";
import { useAuthContext } from "@/contexts/AuthContext";

/* IMPORTS VALIDATIONS  */
import { SignUpResolver } from "@/validations/SignUp";

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
    <section className="bg-create-nft bg-no-repeat bg-cover flex flex-col items-center w-screen h-screen">
      <Header />
      <div className="flex w-1/3 flex-col">
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
      />
    </section>
  );
}
