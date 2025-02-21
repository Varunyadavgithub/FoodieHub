import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  HandPlatter,
  Loader,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const isAdmin = true;
  const loading = false;
  return (
    <div className="px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">FoodieHub</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="relative group text-lg font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              Home
              <span className="absolute bottom-0 left-0 h-[2px] rounded-lg w-0 bg-orange transition-all duration-300 ease-in-out group-hover:w-full group-hover:shadow-[0px_4px_10px_rgba(255,165,0,0.5)]"></span>
            </Link>

            <Link
              to="/profile"
              className="relative group text-lg font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              Profile
              <span className="absolute bottom-0 left-0 h-[2px] rounded-lg w-0 bg-orange transition-all duration-300 ease-in-out group-hover:w-full group-hover:shadow-[0px_4px_10px_rgba(255,165,0,0.5)]"></span>
            </Link>
            <Link
              to="/order/status"
              className="relative group text-lg font-medium text-gray-800 transition duration-300 ease-in-out"
            >
              Order
              <span className="absolute bottom-0 left-0 h-[2px] rounded-lg w-0 bg-orange transition-all duration-300 ease-in-out group-hover:w-full group-hover:shadow-[0px_4px_10px_rgba(255,165,0,0.5)]"></span>
            </Link>
            {isAdmin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Dashboard</MenubarTrigger>
                  <MenubarContent>
                    <Link to="/admin/restaurant">
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/admin/menu">
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <MenubarSeparator />
                    <Link to="/admin/orders">
                      <MenubarItem>Orders</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                  <DropdownMenuItem>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingCart />
              <Button
                size={"icon"}
                className="absolute -inset-y-3 left-2 text-xs h-4 w-4 bg-red-500 hover:bg-red-550 rounded-full"
              >
                5
              </Button>
            </Link>
            <div>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader className="mr-1 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile responsive */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const loading = false;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant="outline"
          className="rounded-full bg-gray-200 text-black hover:bg-gray-300"
        >
          <Menu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-4">
          <SheetTitle>FoodieHub</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
              <DropdownMenuItem>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription>
          <SheetClose asChild>
            <Link
              to="/profile"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <User /> <span>Profile</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/order/status"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <HandPlatter /> <span>Order</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/cart"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <ShoppingCart /> <span>Cart (0)</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/admin/menu"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <SquareMenu /> <span>Menu</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/admin/restaurant"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <UtensilsCrossed /> <span>Restaurant</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/admin/orders"
              className="flex gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <PackageCheck /> <span>Restaurant Orders</span>
            </Link>
          </SheetClose>
        </SheetDescription>
        <Separator />
        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2 bg-gray-100 p-2 rounded-lg">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-bold">Varun Yadav</h1>
          </div>

          <SheetClose asChild>
            {loading ? (
              <Button
                type="submit"
                disabled
                className="bg-orange hover:bg-hoverOrange"
              >
                <Loader className="mr-1 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button type="submit" className="bg-orange hover:bg-hoverOrange">
                Logout
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
