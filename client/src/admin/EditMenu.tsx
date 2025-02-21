import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuFormSchema } from "@/schema/menuSchema";
import { Loader } from "lucide-react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const EditMenu = ({
  selectedMenu,
  openEditForm,
  setOpenEditForm,
}: {
  selectedMenu: MenuFormSchema;
  openEditForm: boolean;
  setOpenEditForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
  const loading = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Edit Menu api implementaion start from here
    console.log(input);
  };

  useEffect(() => {
    setInput({
      name: selectedMenu?.name || "",
      description: selectedMenu?.description || "",
      price: selectedMenu?.price || 0,
      image: undefined,
    });
  }, [selectedMenu]);
  return (
    <div className="">
      <Dialog open={openEditForm} onOpenChange={setOpenEditForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Menu</DialogTitle>
            <DialogDescription>
              Update your menu to keep your offerings fresh and excit.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter menu name"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Enter menu description"
              />
            </div>
            <div>
              <Label>Price in ( Rupees )</Label>
              <Input
                type="number"
                name="price"
                value={input.price}
                onChange={changeEventHandler}
                placeholder="Enter menu price"
              />
            </div>
            <div>
              <Label>Upload Menu Image</Label>
              <Input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  setInput({
                    ...input,
                    image: e.target.files?.[0] || undefined,
                  })
                }
              />
            </div>
            <DialogFooter className="mt-5">
              {loading ? (
                <Button
                  disabled
                  className="w-full bg-orange hover:bg-hoverOrange"
                >
                  <Loader className="mr-1 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  Submit
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMenu;
