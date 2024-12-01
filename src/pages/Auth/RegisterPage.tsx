import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/elements/Input";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase";
import { FirebaseError } from "firebase/app";
import { Button } from "../../shared/elements";

interface FormFieldsProps {
  username: string;
  email: string;
  password: string;
}

const defaultFormFields: FormFieldsProps = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [formFields, setFormFields] =
    useState<FormFieldsProps>(defaultFormFields);
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const hiddenPassword = () => {
    setShowPassword(!showPassword);
  };

  const { username, email, password } = formFields;

  const navigate = useNavigate();

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
        await createUserDocumentFromAuth(response.user, {
          displayName: username,
        });
        resetFormFields();
      }
    } catch (error: unknown) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/email-already-in-use"
      ) {
        alert("Cannot create user, email already in use");
      } else {
        console.error("Error creating user:", error);
      }
    }
  };

  const checkPolicyAgreement = () => {
    setIsAgree(!isAgree);
  };

  const checkFilledForm = ({ username, email, password }: FormFieldsProps) => {
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
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
        <h1 className="text-center text-2xl">SIGN UP!</h1>

        <div>
          <h2 className="text-xl">Don't have an account?</h2>
          <p>Sign up with your email and password</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center gap-6">
            <Input
              name={"username"}
              type={"text"}
              themes={"auth"}
              require={true}
              value={username}
              onChange={handleChange}
            />
            <Input
              name={"email"}
              type={"email"}
              themes={"auth"}
              require
              value={email}
              onChange={handleChange}
            />
            <div className="relative">
              <Input
                type={`${showPassword ? "text" : "password"}`}
                name={"password"}
                themes={"auth"}
                require
                value={password}
                onChange={handleChange}
              />
              <div
                onClick={hiddenPassword}
                className="absolute right-3 top-1/4 transform-y-1/2 cursor-pointer z-20"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" onClick={checkPolicyAgreement} />
              <p>I agree to privacy policy & terms.</p>
            </div>
            <Button
              isActive={isAgree && isFilled ? true : false}
              title={"Sign up"}
              themes={"auth"}
              disabled={isAgree && isFilled ? false : true}
              type="submit"
            />
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-blue-700">
                <Link to={"/login"}>Sign in instead</Link>
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
