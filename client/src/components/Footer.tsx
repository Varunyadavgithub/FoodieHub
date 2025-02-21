import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">FoodieHub</h3>
            <p className="text-gray-600">
              Delivering delicious food anytime and anywhere. We are passionate
              about serving you the best culinary delights, day or night.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-orange transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-600 hover:text-orange transition duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-gray-600 hover:text-orange transition duration-300"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-orange transition duration-300"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                123 Foodie Street, Tasty City
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                info@foodiehub.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FoodieHub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="text-gray-600 hover:text-orange"
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="text-gray-600 hover:text-orange"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="text-gray-600 hover:text-orange"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
