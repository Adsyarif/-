import { ReactNode } from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="font-sans mt-7 pt-16 pb-[32px] md:mt-0">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
