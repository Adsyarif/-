import { Heart, Search, ShoppingBag } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import HamburgerMenu from "./components/HamburgerMenu";
import ProfileMenu from "./components/AccountMenu";

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [currentUser]);

  return (
    <header className="bg-white fixed w-full top-0 z-50 border-b">
      <div className="flex justify-between flex-col md:flex-row md:items-center">
        <nav className="px-4 py-2 md:py-3 md:w-3/4 border-b md:border-none lg:px-0">
          <div className="flex items-center gap-2 md:gap-4">
            <HamburgerMenu />
            <Link to={"/"}>
              <div className="flex items-center min-w-24 md:mr-[55px] lg:ml-[55px] 2xl:justify-start">
                <img src="./logo.png" alt="Logo" className="w-24" />
              </div>
            </Link>
            <div className="hidden lg:flex mx-4 space-x-6 justify-self-end text-sm">
              <ul className="flex space-x-6">
                <li className="group">
                  <a href="#" className="text-gray-800 hover:text-gray-600">
                    About
                  </a>
                </li>

                <li className="group">
                  <a href="#" className="text-gray-800 hover:text-gray-600">
                    Category
                  </a>
                </li>
                <li>
                  <a
                    href="blog.html"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-end ">
          <div className="flex items-center p-1 md:p-3 border-r">
            <Search className="w-4 text-gray-500" />
            <input
              type="search"
              name="search"
              id="headerSearch"
              placeholder="Type for search"
              className="p-2 w-36 text-gray-700 text-sm focus:outline-none focus:ring-0"
            />
          </div>
          <div className="p-3 md:p-4">
            <a href="#" className="text-gray-800 hover:text-gray-600 ">
              <Heart />
            </a>
          </div>
          <div className="border-r border-l p-3 md:p-5">
            <a
              href="#"
              id="essenceCartBtn"
              className="text-gray-800 hover:text-gray-600 flex items-center"
            >
              <ShoppingBag />
            </a>
          </div>
          {isLogin ? (
            <ProfileMenu />
          ) : (
            <>
              <div className="cursor-pointer border-r border-l p-3 md:p-5">
                <Link
                  to="/register"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Register
                </Link>
              </div>
              <div className="cursor-pointer border-r border-l p-3 md:p-5">
                <Link to="/login" className="text-gray-800 hover:text-gray-600">
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
