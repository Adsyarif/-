import { ReactNode } from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="font-sans overflow-hidden m-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
