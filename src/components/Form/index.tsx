import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Input/select";
import { Controller, Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";

/* IMPORTS SERVICES  */
import { createNFT } from "@/services/NftService";

/* IMPORTS VALIDATIONS  */
import { CreateNFTResolver } from "@/validations/CreateNFT";

export function Form() {
  type ICreateNFTForm = {
    nameLayer: string;
    description: string;
    quantity: number;
    id: string;
    format: { label: string; value: string };
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreateNFTForm>({ resolver: CreateNFTResolver as Resolver<ICreateNFTForm, any> });

  async function onSubmit(values: ICreateNFTForm) {
    try {
      toast.loading("Sending!");
      /* await createNFT(values); */
      console.log(values);
      reset({
        nameLayer: "",
        description: "",
        quantity: 0,
        id: "",
        format: { label: "PNG", value: "PNG" },
      });
      toast.success("Success!");
    } catch (error) {
      console.log(error);
      toast.error("Error to create NFT!");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <Controller
        name="nameLayer"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label1="Collection name"
            errors={errors}
            placeholder="New layer name"
            className="mt-1"
            type="text"
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label1="Collection description"
            label2="The description will appear in the NFT metadata"
            errors={errors}
            placeholder="Description"
            type="text"
          />
        )}
      />
      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label1="Collection size"
            label2="Number of NFTs to generate"
            errors={errors}
            placeholder="0"
            type="number"
          />
        )}
      />
      <Controller
        name="id"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label1="Name of each NFT"
            label2="Preview: '#{{id}17}'"
            errors={errors}
            placeholder="#{{id}17}"
            type="text"
          />
        )}
      />

      <Controller
        name="format"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label1="Export Format"
            label2="Recommended format: webp (best quality & size)"
            errors={errors}
            placeholder="Format"
            name="format"
          />
        )}
      />

      <Button type="submit" children={"Buy"} className="h-12 mt-4" />
    </form>
  );
}
