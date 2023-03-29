"use client";
import { AlertEnum } from "@/components/Alert";
import { Button } from "@/components/Button";
import { FormLogin } from "@/components/Form/FormLogin";
import { Header } from "@/components/Header";
import { useAuthContext } from "@/contexts";
import { LoginResolver } from "@/validations/Login";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ILoginForm = {
  email: string;
  password: string;
};

export default function Login() {
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
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: "Incorrect credencials!",
      });
    }
  }

  return (
    <div className="bg-brand-bg flex flex-col items-center h-screen w-full">
      <Header />
      <div className="flex w-1/3 flex-col">
        <Button className="w-full h-12 my-2">
          <Link href={"/"}>Home</Link>
        </Button>
        <Button className="w-full h-12 my-2">
          <Link href={"/create-nft"}>Criar NFT</Link>
        </Button>
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
  );
}
