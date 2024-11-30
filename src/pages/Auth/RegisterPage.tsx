import { ChevronLeft } from "lucide-react";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../shared/components/atomic/input";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase";
import { FirebaseError } from "firebase/app";

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
          <h2 className="text-xl">Fell the best experience!</h2>
          <p>Set up your account here!</p>
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
            <Input
              name={"password"}
              type={"password"}
              themes={"auth"}
              require={true}
              value={password}
              onChange={handleChange}
            />
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>I agree to privacy policy & terms.</p>
            </div>
            <button type="submit" className="bg-blue-500 p-4 mt-2 text-white">
              Sign up
            </button>
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
