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
              <aside className="fixed top-[103px] md:top-16 right-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-lg">
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Your Cart</h1>
                    <button
                      onClick={openCart}
                      className="text-gray-800 hover:text-red-500"
                    >
                      <X className="w-5" />
                    </button>
                  </div>
                  <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                    {products && products.length > 0 ? (
                      products.map((product) => (
                        <div
                          key={product.id}
                          className="flex justify-between items-center gap-4 p-2 border-b"
                        >
                          <div
                            className="w-16 h-16 bg-cover bg-center rounded"
                            style={{
                              backgroundImage: `url(${product.imageUrl})`,
                            }}
                          ></div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800">
                              {product.name}
                            </p>
                            <p className="text-sm text-gray-600">2 x Rp.1000</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Minus className="w-4 cursor-pointer text-gray-500 hover:text-blue-500" />
                            <span className="text-gray-800">1</span>
                            <Plus className="w-4 cursor-pointer text-gray-500 hover:text-blue-500" />
                          </div>
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 className="w-5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 text-center">
                        No product selected
                      </p>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between font-semibold text-gray-800">
                      <span>Total:</span>
                      <span>Rp.3.000,-</span>
                    </div>
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View cart
                      </button>
                      <button
                        className={`flex-1 py-2 px-4 rounded text-white ${
                          isActive
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
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
