import { Link } from "react-router-dom";

export interface ListProps {
  id: number;
  url: string;
  title: string;
}

export interface ItemsProps {
  items: ListProps[];
}

const MenuList = ({ items }: ItemsProps) => {
  return (
    <div className="bg-white p-4 flex flex-col justify-between">
      <ul className="flex flex-col gap-6">
        {items.map((item: ListProps) => (
          <div key={item.id} className="relative group">
            <li className="">
              <Link to={item.url} className="text-gray-800 hover:text-gray-600">
                {item.title}
              </Link>
            </li>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#717FE0] transition-all duration-500 group-hover:w-full"></span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
