import { Facebook, Instagram, Twitter } from "lucide-react";
import Input from "./elements/Input";
import { Button } from "./elements";

const Footer = () => {
  return (
    <div className="bg-black px-4 pt-[75px] pb-[32px] md:px-8 w-full md:flex md:flex-col md:justify-center md:items-center">
      <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-24 lg:flex lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold text-md mb-4">CATEGORIES</p>
          <p className="text-gray-300 text-sm ">Women</p>
          <p className="text-gray-300 text-sm">Men</p>
          <p className="text-gray-300 text-sm">Shoes</p>
          <p className="text-gray-300 text-sm">Watches</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold text-md mb-4">HELP</p>
          <p className="text-gray-300 text-sm">Track Order</p>
          <p className="text-gray-300 text-sm">Returns</p>
          <p className="text-gray-300 text-sm">Shipping</p>
          <p className="text-gray-300 text-sm">FAQs</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold text-md mb-4">GET IN TOUCH</p>
          <p className="text-gray-300 text-sm w-[270px]">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879.
          </p>
          <div className="text-gray-300 flex gap-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            name={"NEWSLETTER"}
            type={"email"}
            placeholder="email@example.com"
            themes={"footer"}
          />
          <Button type={"button"} title={"Subscribe"} themes={"footer"} />
        </div>
      </div>
      <div className="text-gray-500 text-xs mt-16 text-center">
        Copyright &copy;2024 All rights reserved{" "}
        <span className="text-white font-bold">ドリ-ドリ</span>.
      </div>
    </div>
  );
};

export default Footer;
