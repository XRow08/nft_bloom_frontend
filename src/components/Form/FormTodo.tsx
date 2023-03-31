import { useState, useEffect } from "react";

/* IMPORT SERVICES */
import {
  findAll,
  deleteLayer,
  createLayer,
  editLayer,
} from "@/services/NftService";

/* IMPORT DEPENDENCES */
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import classNames from "classnames";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/* IMPORT COMPONENTS */
import { Input } from "../Input";
import { Button } from "../Button";
import { DeleteIcon } from "../Icon/DeleteIcon";
import { Grab } from "../Icon/Grab";
import { ViewOnOff } from "../Input/ViewOnOff";
import { Container } from "../Container";

export function FormTodo({ id, setPreviewFunction }: any) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [keyCheck, setKeyCheck] = useState(99999);
  const [doubleClick, setDoubleClick] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    findAll(id).then((res: any) => {
      if (res.data === 500) {
        setItemsList([]);
        return toast.error("You are not Logged!", { duration: 5000 });
      }
      setItemsList(res.data);
    });
  }, [id]);

  const { control, handleSubmit, reset } = useForm();

  async function onSubmitCreate(values: any) {
    try {
      values.id = id;
      const name = values.name
        ? values.name
        : `New layer name ${itemsList.length}`;
      values.name = name;
      console.log(values.name);
      const { status } = await createLayer(values);
      if (status === 200) {
        reset({ name: "" });
        toast.success("Successfully created!");
        findAll(id).then((res: any) => {
          setItemsList(res.data);
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Error! Try Again...");
    }
  }

  async function onSubmitDelete(name: any) {
    try {
      const data = {
        id: id,
        name: name,
      };

      const { status } = await deleteLayer(data);
      if (status === 200) {
        toast.success("Successfully deleted!");
        findAll(id).then((res: any) => {
          setItemsList(res.data);
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
        : `New layer name ${itemsList.length}`;
      const data = {
        id: id,
        name: name,
        value: valor,
      };

      const { status } = await editLayer(data);
      if (status === 200) {
        toast.success("Successfully edited!");
        const { data } = await findAll(id);
        setItemsList(data);
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

  const clickHandler = (e: any, key: any) => {
    setDoubleClick(false);
    if (e.detail == 2) {
      return setDoubleClick(true);
    }
    setKeyCheck(key);
  };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(itemsList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setItemsList(items);
  }

  const handleSelectItem = (name1: never = name as never) => {
    if (selectedItems.includes(name1)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== name1)
      );
    } else {
      setSelectedItems([...selectedItems, name1]);
    }
  };

  return (
    <>
      <Container className="bg-brand-primary w-[60%] h-[33.2rem] border-r-[0.5rem] border-brand-primary p-2 py-4 pr-2 flex flex-col gap-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-brand-scroll scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmitCreate)}
          className="w-full flex items-center gap-4 h-12 z-10"
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} type="name" placeholder="New layer category" />
            )}
          />

          <Button type="submit" className="h-12 w-20">
            + Add
          </Button>
        </form>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="categorys">
            {(provided) => (
              <ul
                className="flex flex-col gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemsList.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          className={
                            "flex items-center gap-2 w-full cursor-default"
                          }
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {name !== "Background" && <Grab />}

                          {doubleClick &&
                          keyCheck === index &&
                          name !== "Background" ? (
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
                                setPreviewFunction(name);
                              }}
                            >
                              <button
                                className="bg-brand-primary w-full h-full px-4 rounded-lg drop-shadow-none shadow-none outline-none flex justify-start items-center text-white"
                                children={name}
                              />
                            </div>
                          )}
                          <ViewOnOff
                            checked={selectedItems.includes(name)}
                            onChange={() => handleSelectItem(name)}
                          />
                          <DeleteIcon onClick={() => onSubmitDelete(name)} />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  );
}
