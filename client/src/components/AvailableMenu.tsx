import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  const loading = false;

  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.bYVzI-jE3QNyPyS1wGDCGwHaFj&pid=Api&P=0&h=180"
            alt="menu_img"
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tandoori Tadka
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              veniam.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">₹500</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            {loading ? (
              <Button
                disabled
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                <Loader className="mr-1 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="w-full bg-orange hover:bg-hoverOrange">
                Add to Cart
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
