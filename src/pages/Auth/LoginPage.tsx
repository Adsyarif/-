import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/elements/Input";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";
import { useState } from "react";
import { Button } from "../../shared/elements";
import { FirebaseError } from "firebase/app";

interface LoginFormFieldsProps {
  email: string;
  password: string;
}

const defaultLoginFormFields: LoginFormFieldsProps = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<LoginFormFieldsProps>(
    defaultLoginFormFields
  );
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  const { email, password } = formFields;

  const hiddenPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
    checkFilledForm(formFields);
  };

  const resetFormFields = (defaultLoginFormFields: LoginFormFieldsProps) => {
    setFormFields(defaultLoginFormFields);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        resetFormFields(defaultLoginFormFields);
        setError("");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            setError("No user associated with this email");
            break;
          case "auth/invalid-credential":
            setError("Incorrect password for email");
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  };

  const checkFilledForm = ({ email, password }: LoginFormFieldsProps) => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFilled(true);
    } else setIsFilled(false);
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
          <h2 className="text-xl">Already have an account?</h2>
          <p>Sign in with your email and password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center gap-6">
            <Input
              name={"email"}
              type={"email"}
              themes={"auth"}
              onChange={handleChange}
              require
            />
            <div className="relative">
              <Input
                type={`${showPassword ? "text" : "password"}`}
                name={"password"}
                themes={"auth"}
                onChange={handleChange}
                require
              />
              <div
                onClick={hiddenPassword}
                className="absolute right-3 top-1/4 transform-y-1/2 cursor-pointer z-20"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="h-2">
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
            <Button
              isActive={isFilled ? true : false}
              title={"Sign up"}
              themes={"auth"}
              disabled={isFilled ? false : true}
              type={"submit"}
            />
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
        <button
          type="button"
          className="bg-black text-white p-3"
          onClick={logGoogleUser}
        >
          Sign in with Google
        </button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
