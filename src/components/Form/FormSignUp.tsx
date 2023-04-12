import { Controller } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Alert } from "../Alert";
import Link from "next/link";
import { EmailIcon } from "../Icon/EmailIcon";
import { PasswordIcon } from "../Icon/PasswordIcon";
import { Name } from "../Icon/Name";

export function FormSignUp({
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
        <Name />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              errors={errors}
              type="name"
              placeholder="Enter your name"
            />
          )}
        />
      </label>
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
              placeholder="Enter your password"
            />
          )}
        />
      </label>

      <Button type="submit" className="w-[92.8%] self-end h-12">
        Confirm and create
      </Button>
    </form>
  );
}
