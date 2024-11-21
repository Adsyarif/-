import { ReactNode } from "react";
import Header from "../shared/components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="font-sans">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
