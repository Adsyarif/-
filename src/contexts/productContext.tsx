import { createContext, ReactNode, useState } from "react";

const SHOP_DATA = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl:
      "https://img.freepik.com/free-photo/black-bucket-hat-unisex-accessory_53876-106055.jpg?uid=R12883418&ga=GA1.1.1822390289.1733205964&semt=ais_hybrid",
    price: 25,
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl:
      "https://img.freepik.com/free-photo/green-cap-fashion-white-elegance_1203-6074.jpg?t=st=1733206224~exp=1733209824~hmac=adc76e5adb2be764783eb52f8cea802d73a52711be515c1a9171d778767cfbae&w=1380",
    price: 18,
  },
  {
    id: 3,
    name: "Brown Cowboy",
    imageUrl:
      "https://img.freepik.com/free-photo/fashionable-fedora-hat-studio_23-2150737131.jpg?t=st=1733206195~exp=1733209795~hmac=148ce3a99a8d7e4c1dfac5416d4c78c2ca1e6fae5ff5e96990502b6ed14958ef&w=1380",
    price: 35,
  },
  {
    id: 4,
    name: "Grey Brim",
    imageUrl:
      "https://img.freepik.com/free-photo/silly-cute-brunette-female-hiding-face-hat-peeking_176420-20656.jpg?t=st=1733206268~exp=1733209868~hmac=3196d315aeaf6c8b93521c1cb5682210940c64a01af199aae951795662c022a3&w=1380",
    price: 25,
  },
  {
    id: 5,
    name: "Green Beanie",
    imageUrl:
      "https://img.freepik.com/free-photo/black-sport-visor-cotton-object_1203-5372.jpg?t=st=1733206302~exp=1733209902~hmac=aef4e217009af70d34f07895eab78cc2469a4b6bf72b9444e0237b74f1b8ca43&w=1380",
    price: 18,
  },
  {
    id: 6,
    name: "Palm Tree Cap",
    imageUrl:
      "https://img.freepik.com/free-photo/colombian-flag-cap_23-2150699642.jpg?t=st=1733206361~exp=1733209961~hmac=ba4e4d35836a4d7291ec58a98f71dd93525756f8941d5b529547a722db04956f&w=740",
    price: 14,
  },
  {
    id: 7,
    name: "Red Beanie",
    imageUrl:
      "https://img.freepik.com/free-photo/red-baseball-cap-belt-wooden-table-with-black-background_384344-5156.jpg?t=st=1733206329~exp=1733209929~hmac=b5773b930931776a3f8dfeefbc0c072add7c0aea6f3e86c976976f82e388b1da&w=1380",
    price: 18,
  },
  {
    id: 8,
    name: "Wolf Cap",
    imageUrl:
      "https://img.freepik.com/free-photo/black-yellow-cap-headwear-accessory_53876-103580.jpg?t=st=1733206426~exp=1733210026~hmac=bd0b9e46f295cee19835cfda375dfcbb4d860e83a68e6a2cc777c6dd211de781&w=1060",
    price: 14,
  },
  {
    id: 9,
    name: "Blue Snapback",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-portrait-teenager-isolated_23-2149158277.jpg?t=st=1733206393~exp=1733209993~hmac=21edddba4874050bca8f4422a58574053bba5cb652c75a1943863a339021a526&w=1380",
    price: 16,
  },
];

export interface ProductProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductsContextProps {
  products: ProductProps[] | undefined;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[] | undefined>>;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: undefined,
  setProducts: () => {},
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductProps[] | undefined>(
    SHOP_DATA
  );
  const value = {
    products,
    setProducts,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
