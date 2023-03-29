import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpSchema = yup.object({
  name: yup.string().required("Preencha seu nome"),
  email: yup
    .string()
    .email("Preencha um e-mail válido")
    .required("Preencha um e-mail"),
  password: yup.string().required("Preencha uma senha"),
});

export const SignUpResolver = yupResolver(SignUpSchema);
