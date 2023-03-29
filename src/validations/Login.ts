import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = yup.object({
  email: yup.string().email("Invalid email!").required("Incorrect Email!"),
  password: yup.string().required("Incorrect Password!"),
});

export const LoginResolver = yupResolver(LoginSchema);
