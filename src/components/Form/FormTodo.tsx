import { useState, useEffect } from "react";
import { findAll } from "@/services/NftService";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { Reorder } from "framer-motion";
import { useLayer } from "@/hooks";
import { useLayersStore } from "@/stores/layers";
import { ILayer } from "@/interfaces";
import { LayerItem } from "../LayerList/LayerItem";

export function FormTodo({ id }: { id: string }) {
  const [keyCheck, setKeyCheck] = useState(99999);
  const { onSubmitCreate } = useLayer();
  const { setLayersOrder, layersOrder } = useLayersStore();

  useEffect(() => {
    findAll(id)
      .then((res) => {
        if (res.data === 500) {
          return toast.error("You are not Logged!");
        }
        console.log(res.data);
        setLayersOrder(res.data as ILayer[]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("You have to connect your Wallet!", { duration: 5000 });
      });
  }, [id]);

  const { control, handleSubmit } = useForm();

  async function onCreate(values: any) {
    await onSubmitCreate(values, id);
  }

  return (
    <Container className="bg-brand-primary w-[60%] h-[97%] border-r-[0.5rem] border-brand-primary p-2 py-4 pr-2 flex flex-col gap-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-brand-scroll scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg">
      <form
        onSubmit={handleSubmit(onCreate)}
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

      {layersOrder.length === 0 ? (
        <div className="w-full h-full flex justify-center items-centers mb-20">
          <Loading size="big" label="Loading categorys..." />
        </div>
      ) : (
        <Reorder.Group axis="y" onReorder={setLayersOrder} values={layersOrder}>
          {layersOrder.map((item, index) => (
            <LayerItem
              key={index}
              item={item}
              index={index}
              keyCheck={keyCheck}
              setKeyCheck={(e) => setKeyCheck(e)}
            />
          ))}
        </Reorder.Group>
      )}
    </Container>
  );
}

/* <DragDropContext onDragEnd={handleOnDragEnd}>
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
        </DragDropContext> */
