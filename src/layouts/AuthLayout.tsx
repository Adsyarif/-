import { ReactNode } from "react";

interface AuthLayoutPage {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutPage) => {
  return (
    <div
      className="flex justify-center object-cover items-center w-full h-screen font-sans"
      style={{
        backgroundImage: `url(/bg-1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
