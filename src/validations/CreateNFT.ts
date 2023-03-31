import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateNFTSchema = yup.object({
  nameLayer: yup.string().required("Type the nft name!"),
  description: yup.string().required("Type the description!"),
  quantity: yup.number().required("Type the quantity!"),
  id: yup.string().required("Type the Id!"),
  format: yup.object({
    label: yup.string(),
    value: yup.string().required("Select a format"),
  }),
});

export const CreateNFTResolver = yupResolver(CreateNFTSchema);
