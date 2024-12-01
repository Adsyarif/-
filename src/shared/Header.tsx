import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLogin = false;

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50 border-b">
      <div className="flex justify-between flex-col md:flex-row md:items-center">
        <nav className="px-4 py-2 md:py-3 md:w-3/4 border-b md:border-none lg:px-0">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="lg:hidden">
              <button className="text-xl" onClick={handleMenu}>
                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </button>
            </div>
            <aside
              className={`text-sm fixed top-16 left-0 w-1/2 border-r shadow-xl lg:hidden ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="bg-white p-4 flex flex-col justify-between">
                <ul className="flex flex-col gap-6">
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-gray-800 hover:text-gray-600"
                    >
                      Register
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-800 hover:text-gray-600"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <Link to={"/"}>
              <div className="flex items-center min-w-24 md:mr-[55px] lg:ml-[55px] 2xl:justify-start">
                <img src="./logo.png" alt="Logo" className="w-24" />
              </div>
            </Link>
            <div className="hidden lg:flex mx-4 space-x-6 justify-self-end text-sm">
              <ul className="flex space-x-6">
                <li className="group">
                  <a href="#" className="text-gray-800 hover:text-gray-600">
                    Shop
                  </a>
                </li>

                <li className="group">
                  <a href="#" className="text-gray-800 hover:text-gray-600">
                    Pages
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
            <div className="cursor-pointer border-r border-l p-3 md:p-5">
              <UserRound className="text-gray-800 hover:text-gray-600 " />
            </div>
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
