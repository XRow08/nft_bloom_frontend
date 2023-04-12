import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpSchema = yup.object({
  name: yup.string().required("Type the name"),
  email: yup
    .string()
    .email("Type a valid email")
    .required("Type a email"),
  password: yup.string().required("Type a password"),
});

export const SignUpResolver = yupResolver(SignUpSchema);
