import { Controller } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Alert } from "../Alert";
import Link from "next/link";
import { EmailIcon } from "../Icon/EmailIcon";
import { PasswordIcon } from "../Icon/PasswordIcon";

export function FormLogin({
  onSubmit,
  alert,
  type,
  message,
  control,
  errors,
}: any) {
  return (
    <form className="w-full flex flex-col gap-8" onSubmit={onSubmit}>
      {alert && <Alert type={type}>{message}</Alert>}
      <label className="flex items-center gap-2">
        <EmailIcon />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              errors={errors}
              type="email"
              placeholder="Enter your email"
            />
          )}
        />
      </label>
      <label className="flex items-center gap-1 pl-1">
        <PasswordIcon />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              errors={errors}
              type="password"
              placeholder="Password"
            />
          )}
        />
        <Link
          href={"/"}
          className="absolute right-[5.1rem] bottom-[18.5rem] text-center text-white cursor-pointer text-sm font-mplus font-normal transition-all duration-300 ease-in-out"
        >
          Recover Password
        </Link>
      </label>

      <div className="w-[92.5%] self-end flex flex-col gap-4">
        <Button type="submit" className="w-full h-12 mt-8">
          Access account
        </Button>
        <Link
          href={"/register"}
          className="w-full text-center cursor-pointer text-white font-mplus font-normal hover:scale-[1.03] transition-all duration-300 ease-in-out"
        >
          Create an account
        </Link>
      </div>
    </form>
  );
}
