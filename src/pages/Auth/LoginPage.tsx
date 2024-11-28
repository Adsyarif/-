import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/components/atomic/input";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <AuthLayout>
      <div className="p-8 border shadow-lg gap-6 flex flex-col w-full md:w-1/2 max-w-[480px] bg-white bg-opacity-85">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={handleBack}
        >
          <ChevronLeft />
          <p>Back</p>
        </div>
        <h1 className="text-center text-2xl">LOGIN!</h1>

        <div>
          <h2 className="text-xl">Welcome Back!</h2>
          <p>Input your account here!</p>
        </div>
        <form action="submit">
          <div className="flex flex-col justify-center gap-6">
            <Input name={"email"} type={"email"} themes={"auth"} />
            <Input name={"password"} type={"password"} themes={"auth"} />
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button type="submit" className="bg-blue-500 p-4 mt-2 text-white">
              Sign up
            </button>
            <p className="text-center">
              New on our platform?{" "}
              <span className="text-blue-700">
                <Link to={"/register"}>Create an account</Link>
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
