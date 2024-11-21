import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between margin-auto py-3 px-8">
        <nav className="flex items-center justify-between gap-16">
          <div className="flex items-center justify-self-start mr-[55px]">
            <img src="./logo.png" alt="Logo" className="w-24" />
          </div>

          {/* Menu */}
          <div className="hidden lg:flex mx-4 space-x-6 justify-self-end text-sm">
            <ul className="flex space-x-6">
              {/* Shop Dropdown */}
              <li className="relative group">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Shop
                </a>
              </li>

              {/* Pages Dropdown */}
              <li className="relative group">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Pages
                </a>
              </li>

              {/* Blog */}
              <li>
                <a
                  href="blog.html"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Blog
                </a>
              </li>

              {/* Contact */}
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
        </nav>

        {/* Header Meta Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              name="search"
              id="headerSearch"
              placeholder="Type for search"
              className="border p-2 rounded-lg text-gray-700 text-sm"
            />
            <button className="absolute right-0 top-0 p-2 text-gray-500">
              <Search />
            </button>
          </div>

          {/* Favourite */}
          <div>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Heart />
            </a>
          </div>

          {/* Cart */}
          <div>
            <a
              href="#"
              id="essenceCartBtn"
              className="text-gray-800 hover:text-gray-600 flex items-center"
            >
              <ShoppingBag />
            </a>
          </div>

          {/* User Login */}
          <div className="cursor-pointer">
            <UserRound className="text-gray-800 hover:text-gray-600 " />
          </div>
          <div className="lg:hidden ml-4">
            <button className="text-xl">
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
