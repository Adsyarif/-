import {
  Circle,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import HamburgerMenu from "./components/HamburgerMenu";
import ProfileMenu from "./components/AccountMenu";
import { ProductsContext } from "../contexts/productContext";

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);
  const { products } = useContext(ProductsContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  const openCart = () => setIsCartOpen(!isCartOpen);

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
          <div
            className="border-r border-l p-3 cursor-pointer md:p-5"
            onClick={openCart}
          >
            <div className="text-gray-800 hover:text-gray-600 flex items-center">
              <ShoppingBag />
            </div>
          </div>
          {isCartOpen && (
            <>
              <div className="fixed top-[103px] w-full h-screen bg-black opacity-20 md:top-16"></div>
              <aside className="fixed top-[103px] w-full h-full bg-white flex flex-col items-center md:w-1/2 lg:w-1/3 xl:w-1/4 md:top-16">
                <div className="mt-10 w-3/4 h-3/4 flex flex-col items-center justify-between">
                  <div className="flex justify-between items-center w-full ">
                    <h1 className="font-bold text-lg">Your Cart</h1>
                    <div className="cursor-pointer" onClick={openCart}>
                      <X />
                    </div>
                  </div>
                  <div className="w-full h-3/4 flex flex-col gap-3 overflow-hidden overflow-y-auto scrollbar-circular p-1">
                    {products && products.length > 0 ? (
                      products.map((product) => (
                        <div
                          key={product.id}
                          className="w-full flex justify-between gap-2 relative group"
                        >
                          <div
                            className="relative w-5/12 h-[150px] object-cover items-center container transition-all ease-in-out duration-500 overflow-hidden group-hover:scale-110"
                            style={{
                              backgroundImage: `url(${product.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute right-0 top-0 bg-red-500">
                              <div className="text-white p-2">
                                <Trash2 size={18} />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-1/2 pr-2">
                            <div className="h-3/4 flex flex-col justify-around pb-5">
                              <p className="font-bold">{product.name}</p>
                              <p className="pb-5 text-sm">{"2 x Rp.1000"}</p>
                            </div>
                            <div>
                              <Circle size={15} />
                            </div>
                            <div className="h-1/4 self-end p-2 flex items-center justify-between">
                              <div className="flex justify-between items-center gap-2">
                                <Minus size={15} />
                                <p className="">{"1"}</p>
                                <Plus size={15} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute -z-20 right-0 w-7/12 h-[150px] opacity-35">
                            <div className="relative w-full h-full">
                              <svg
                                className="absolute w-full h-full fill-blue-300 transition-colors duration-300 group-hover:fill-red-300" // Menambahkan transisi warna untuk hover
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d={
                                    isCartOpen
                                      ? "M100,0 L100,40 Q50,100 50,100 L100,100 Z"
                                      : "M100,0 L100,100 Q50,100 50,100 L100,100 Z"
                                  }
                                  className="transition-all duration-1000"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No product selected</p>
                    )}
                  </div>
                  <div className="w-full flex flex-col justify-between pt-5">
                    <div className="py-2">
                      <p>Total: Rp.3.000,-</p>
                    </div>
                    <div className="flex justify-around items-center">
                      <button
                        className={
                          "bg-blue-500 hover:bg-[#717FE0] cursor-pointer p-4 mt-2 text-white"
                        }
                      >
                        View cart
                      </button>
                      <button
                        className={`${
                          isActive
                            ? "bg-blue-500 hover:bg-[#717FE0] cursor-pointer"
                            : "bg-gray-500"
                        } p-4 mt-2 text-white`}
                      >
                        Check out
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </>
          )}
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
