import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:border border-gray-300 md:shadow-lg md:p-8 w-full max-w-md rounded-lg mx-4 text-center">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-500">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        {loading ? (
          <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
            <Loader className="mr-1 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-orange hover:bg-hoverOrange"
          >
            Send Reset Link
          </Button>
        )}
        <span>
          Back to{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
