import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/components/atomic/input";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <AuthLayout>
      <div className="p-8 border shadow-lg gap-6 flex flex-col w-full md:w-1/2 max-w-[480px] bg-white bg-opacity-85">
        <div className="flex gap-2 items-center" onClick={handleBack}>
          <ChevronLeft />
          <p>Back</p>
        </div>
        <h1 className="text-center text-2xl">SIGN UP!</h1>

        <div>
          <h2 className="text-xl">Fell the best experience!</h2>
          <p>Choose your style here!</p>
        </div>
        <form action="submit">
          <div className="flex flex-col justify-center gap-6">
            <Input name={"username"} type={"text"} themes={"auth"} />
            <Input name={"email"} type={"email"} themes={"auth"} />
            <Input name={"password"} type={"password"} themes={"auth"} />
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>I agree to privacy policy & terms.</p>
            </div>
            <button type="submit" className="bg-blue-500 p-4 mt-2 text-white">
              Sign up
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-blue-700">Sign in instead</span>.
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
