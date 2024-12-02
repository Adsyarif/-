import { User } from "firebase/auth";
import { createContext, FC, ReactNode, useState } from "react";

interface UserContextProps {
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const defaultValue: UserContextProps = {
  currentUser: undefined,
  setCurrentUser: () => {},
};

export const UserContext = createContext<UserContextProps>(defaultValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const value: UserContextProps = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
