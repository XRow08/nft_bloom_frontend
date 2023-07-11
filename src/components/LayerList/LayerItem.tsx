import classNames from "classnames";
import { DeleteIcon } from "../Icon/DeleteIcon";
import { Grab } from "../Icon/Grab";
import { Input } from "../Input";
import { ViewOnOff } from "../Input/ViewOnOff";
import { useState } from "react";
import { useLayersStore } from "@/stores/layers";
import { ILayer } from "@/interfaces";
import { deleteLayer, editLayer, findAll } from "@/services/NftService";
import toast from "react-hot-toast";
import { Reorder, useMotionValue } from "framer-motion";

type Props = {
  keyCheck: number;
  index: number;
  item: ILayer;
  setKeyCheck: (item: number) => void;
};

export function LayerItem({ item, keyCheck, index, setKeyCheck }: Props) {
  const [doubleClick, setDoubleClick] = useState(false);
  const {
    setLayersOrder,
    layersOrder,
    setNameLayer,
    selectedItems,
    setSelectedItems,
  } = useLayersStore();

  async function onSubmitDelete(name: any) {
    try {
      const data = {
        id: item.id,
        name: name,
      };

      const { status } = await deleteLayer(data);
      if (status === 200) {
        toast.success("Successfully deleted!");
        findAll(item.id).then((res: any) => {
          setLayersOrder(res.data);
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Cannot delete the Background!");
    }
  }

  async function onSubmitEdit(e: any, name: any) {
    try {
      setDoubleClick(false);
      const valor = e.target.value
        ? e.target.value
        : `New layer name ${layersOrder?.length}`;
      const data = {
        id: item.id,
        name: name,
        value: valor,
      };

      const { status } = await editLayer(data);
      if (status === 200) {
        toast.success("Successfully edited!");
        const { data } = await findAll(item.id);
        setLayersOrder(data as ILayer[]);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Cannot delete the Background!");
    }
  }

  function handleKeyPress(event: any, name: any) {
    if (event.key === "Enter") {
      onSubmitEdit(event, name);
    }
  }

  const clickHandler = (e: any, key: number) => {
    setDoubleClick(false);
    if (e.detail == 2) {
      return setDoubleClick(true);
    }
    setKeyCheck(key);
  };

  const handleSelectItem = (name: any) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== name)
      );
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };
  const y = useMotionValue(0);
  return (
    <Reorder.Item
      style={{ y }}
      value={item}
      className={"flex items-center gap-2 w-full cursor-default"}
    >
      {item.name !== "Background" && <Grab />}

      {doubleClick && keyCheck === index && item.name !== "Background" ? (
        <Input
          type="text"
          onBlur={(e: any) => onSubmitEdit(e, name)}
          onKeyDown={() => handleKeyPress}
        />
      ) : (
        <div
          className={classNames(
            "bg-transparent transition-all duration-75 ease-in rounded-lg h-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-full",
            {
              "bg-gradient-to-r from-[#03FB75] to-[#00A3FF] p-[1px]":
                keyCheck === index,
            }
          )}
          onClick={(e) => {
            clickHandler(e, index);
            setNameLayer(item.name);
          }}
        >
          <button
            className="bg-brand-primary w-full h-full px-4 rounded-lg drop-shadow-none shadow-none outline-none flex justify-start items-center text-white"
            children={item.name}
          />
        </div>
      )}
      <ViewOnOff
        checked={selectedItems.includes(name as any)}
        onChange={({ target }) => handleSelectItem(target.value)}
      />
      <DeleteIcon onClick={() => onSubmitDelete(name)} />
    </Reorder.Item>
  );
}
