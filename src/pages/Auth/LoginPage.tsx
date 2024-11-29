import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/components/atomic/input";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopUp,
  signInWithFacebookPopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };
  const logFacebookUser = async () => {
    const response = await signInWithFacebookPopUp();
    createUserDocumentFromAuth(response.user);
  };

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
        <h1 className="text-center text-2xl">Sign In!</h1>

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
              Sign in
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
        <div className="relative flex items-center justify-center w-full h-9">
          <div className=" bg-black w-full h-[0.1px]"></div>
          <div className="absolute z-100 top-1 right-1/2 translate-x-1/2">
            <p className="bg-white mx-auto px-4">or</p>
          </div>
        </div>
        <button className="bg-black text-white p-3" onClick={logGoogleUser}>
          Sign in with Google
        </button>
        <button
          className="bg-blue-700 text-white p-3"
          onClick={logFacebookUser}
        >
          Sign in with Facebook
        </button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
