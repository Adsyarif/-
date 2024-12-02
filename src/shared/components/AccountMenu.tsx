import { UserRound } from "lucide-react";
import { useContext, useState } from "react";
import MenuList from "../elements/MenuList";
import UserDetailHeader from "../../features/userDetail/components/UserDetailHeader";
import { Button } from "../elements";
import { UserContext } from "../../contexts/userContext";
import { signOutuser } from "../../utils/firebase";

const menuList = [
  { id: 1, title: "Profile", url: "/shop" },
  { id: 2, title: "History", url: "/shop" },
  { id: 3, title: "Setting", url: "/shop" },
];

const ProfileMenu = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await signOutuser();
    setCurrentUser(undefined);
  };
  return (
    <div
      className="relative cursor-pointer border-r border-l p-3 md:p-5"
      onClick={handleMenu}
    >
      <UserRound className="text-gray-800 hover:text-gray-600 " />
      <aside
        className={`text-sm bg-white fixed top-14 translate-y-11 right-0 w-3/4 border-t shadow-xl flex min-h-1/4 md:w-1/2 md:top-8 md:translate-y-8 lg:w-1/4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <UserDetailHeader />
        <div className="bg-white w-1/2 flex flex-col justify-center items-center ">
          <div className="m-4 w-full flex flex-col justify-center border-r">
            <MenuList items={menuList} />
            <div className="bg-white flex justify-between items-end w-full pt-4 px-4">
              <div className="w-1/2 h-full"></div>
              <Button
                title={"Sign out"}
                themes={"footer"}
                type={"button"}
                onClick={handleSignOut}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default ProfileMenu;
