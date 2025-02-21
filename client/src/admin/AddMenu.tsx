import EditMenu from "@/admin/EditMenu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuFormSchema, MenuFormSchema } from "@/schema/menuSchema";
import { Loader, Plus } from "lucide-react";
import { FormEvent, useState } from "react";

const menus = [
  {
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, itaque.",
    price: 80,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.69d8NdxIg8T18YIqKXZ9JQHaEJ&pid=Api&P=0&h=180",
  },
  {
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, itaque.",
    price: 80,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.69d8NdxIg8T18YIqKXZ9JQHaEJ&pid=Api&P=0&h=180",
  },
];
const AddMenu = () => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
  const [open, setOpen] = useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [errors, setErrors] = useState<Partial<MenuFormSchema>>({});

  const loading = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuFormSchema.safeParse(input);
    if (!result.success) {
      const fielErrors = result.error.formErrors.fieldErrors;
      setErrors(fielErrors as Partial<MenuFormSchema>);
      return;
    }
    // Add Menu api implementaion start from here
    console.log(input);
  };
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-medium text-lg md:text-2xl">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange hover:bg-hoverOrange">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out.
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
                {errors && (
                  <span className="text-xs text-red-500">{errors.name}</span>
                )}
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
                {errors && (
                  <span className="text-xs text-red-500">
                    {errors.description}
                  </span>
                )}
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
                {errors && (
                  <span className="text-xs text-red-500">{errors.price}</span>
                )}
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
                {errors && (
                  <span className="text-xs text-red-500">
                    {errors.image?.name}
                  </span>
                )}
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
      {menus.map((menu: any, idx: number) => (
        <div key={idx} className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
            <img
              src={menu.image}
              alt="res_image"
              className="object-cover w-full h-16 md:w-24 md:h-24 rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
              <h2 className="text-sm font-semibold">
                Price: <span className="text-[#D19254]">₹{menu.price}</span>
              </h2>
            </div>
            <Button
              size={"sm"}
              onClick={() => {
                setSelectedMenu(menu);
                setOpenEditForm(true);
              }}
              className="bg-orange hover:bg-hoverOrange mt-2"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
      <EditMenu
        selectedMenu={selectedMenu}
        openEditForm={openEditForm}
        setOpenEditForm={setOpenEditForm}
      />
    </div>
  );
};

export default AddMenu;
