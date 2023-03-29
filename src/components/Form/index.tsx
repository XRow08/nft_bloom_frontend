import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Input/select";
import { Title } from "../Title";

export function Form({onSubmit} : any) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-between h-full">
      <label className="flex flex-col gap-2">
        <Title children={"Collection name"} color="white" className="pl-4" />
        <Input placeholder="New layer name" type="text" />
      </label>
      <label className="flex flex-col">
        <Title
          children={"Collection description"}
          color="white"
          className="pl-4"
        />
        <Title
          children={"The description will appear in the NFT metadata"}
          className="pl-4 text-[rgba(255,255,255,0.5)] mb-2"
        />
        <Input placeholder="Description" type="text" />
      </label>
      <label className="flex flex-col">
        <Title children={"Collection size"} color="white" className="pl-4" />
        <Title
          children={"Number of NFTs to generate"}
          className="pl-4 text-[rgba(255,255,255,0.5)] mb-2"
        />
        <Input placeholder="0" type="number" />
      </label>
      <label className="flex flex-col">
        <Title children={"Name of each NFT"} color="white" className="pl-4" />
        <Title
          children={"Preview: '#{{id}17}'"}
          className="pl-4 text-[rgba(255,255,255,0.5)] mb-2"
        />
        <Input placeholder="#{{id}17}" type="text" />
      </label>

      <label className="flex flex-col">
        <Title children={"Export Format"} color="white" className="pl-4" />
        <Title
          children={"Recommended format: webp (best quality & size)"}
          className="pl-4 text-[rgba(255,255,255,0.5)] mb-2"
        />
        <Select />
      </label>

      <Button type="submit" children={"Buy"} className="h-12 mt-4" />
    </form>
  );
}
