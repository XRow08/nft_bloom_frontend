import { ILayer } from "@/interfaces";
import { createLayer, deleteLayer, findAll } from "@/services/NftService";
import { useLayersStore } from "@/stores/layers";
import toast from "react-hot-toast";

export function useLayer() {
  const {setLayersOrder, layersOrder} = useLayersStore()

  async function onSubmitCreate(values: any, id: string) {
    try {
      values.id = id;
      const name = values.name
        ? values.name
        : `New layer name ${layersOrder?.length}`;
      values.name = name;
      console.log(values.name);
      const { status } = await createLayer(values);
      if (status === 200) {
        toast.success("Successfully created!");
        findAll(id).then((res) => {
          setLayersOrder(res.data as ILayer[]);
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error)
      toast.error("Error! Try Again...");
    }
  }

  async function onSubmitDelete(name: any, id: string) {
    try {
      const data = {
        id: id,
        name: name,
      };

      const { status } = await deleteLayer(data);
      if (status === 200) {
        toast.success("Successfully deleted!");
        findAll(id).then((res: any) => {
          setLayersOrder(res.data);
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Cannot delete the Background!");
    }
  }

  return { onSubmitCreate, onSubmitDelete }
}