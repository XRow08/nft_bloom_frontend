"use client";
import { BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

/* COMPONENTS IMPORTS  */
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { InputImage } from "@/components/Input/InputImage";
import { Switch } from "@/components/Input/switch";
import { Form } from "@/components/Form";
import { FormTodo } from "@/components/Form/FormTodo";

import { StorageHelper } from "../../helpers/StorageHelper";

import { Toaster } from "react-hot-toast";
import { Preview } from "@/components/Preview";

export default function CreateNFT() {
  const [preview, setPreview] = useState(false);
  const [nameLayer, setNameLayer] = useState();
  const [id, setId] = useState(null);
  const handleChangeChk = (e: any) => {
    setPreview(e.target.checked);
  };

  useEffect(() => {
    const { id } = StorageHelper.getItem("user");
    setId(id);
  }, []);

  return (
    <section className="w-full h-screen bg-create-nft bg-no-repeat bg-cover flex flex-col items-center overflow-hidden">
      <Header />
      <Toaster />
      <div className="w-[90%] bg-gradient-to-l from-[#06FFF0] to-[#03FB75] mt-4 h-[5%] rounded-t-lg flex justify-center items-center font-mplus font-medium text-[20px]">
        Create rarity and tiers
      </div>
      <Container className="w-[90%] h-[80%] flex justify-center items-center rounded-b-lg rounded-t-none">
        <div className="w-[95%] h-full">
          <div className="w-full flex justify-between border-b border-b-[rgba(255,255,255,0.3)] py-4">
            <h1 className="font-normal font-archivo text-white text-[20px]">
              To create your NFT collection, fill in the fields below
            </h1>
            <Link href={"/"}>
              <BsArrowLeftCircle color="white" size={24} />
            </Link>
          </div>
          <div className="w-full h-full flex items-start py-4 gap-10">
            <Container className="w-[40%] h-[90%] p-4 pb-6">
              <Form />
            </Container>
            <div className="h-[90%] w-full flex flex-col">
              <Container className="w-full h-[10%] flex justify-center items-center font-mplus font-normal text-[20px] text-white">
                Create rarity and tiers
              </Container>
              <Switch
                checked={preview}
                onChange={(e) => {
                  handleChangeChk(e);
                }}
              />
              {!preview ? (
                <div className="flex w-full h-full gap-4">
                  <FormTodo
                    id={id}
                    setPreviewFunction={(name: any) => setNameLayer(name)}
                  />
                  <InputImage nameLayer={nameLayer} id={id} />
                </div>
              ) : (
                <Preview id={id} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}