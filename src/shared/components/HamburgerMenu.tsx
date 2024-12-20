import { useState } from "react";
import MenuList from "../elements/MenuList";

const menuList = [
  { id: 1, title: "About", url: "/shop" },
  { id: 2, title: "Category", url: "/shop" },
  { id: 3, title: "Blog", url: "/shop" },
  { id: 4, title: "Contact", url: "/shop" },
  { id: 5, title: "Shop", url: "/shop" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
        <MenuList items={menuList} />
      </aside>
    </>
  );
};

export default HamburgerMenu;
