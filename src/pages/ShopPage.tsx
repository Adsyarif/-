import MainLayout from "../layouts/MainPageLayout";
import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/productContext";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { categories, Category } from "../features/categories/hooks/useCategory";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const defaultSelected = categories.reduce((acc, category: Category) => {
    acc[category.title] = false;
    return acc;
  }, {} as Record<string, boolean>);
  const [isSelected, setIsSelected] = useState(defaultSelected);

  const toggleFilter = (e: React.MouseEvent<HTMLParagraphElement>): void => {
    const { id } = e.target as HTMLParagraphElement;

    setIsSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetFilters = () => {
    setIsSelected(
      Object.keys(defaultSelected).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as Record<string, boolean>)
    );
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="w-full lg:w-3/4">
          <div className="self-start mb-2">
            <p className="text-xs">Home/shop</p>
          </div>
          <div className="flex w-full items-center justify-between mb-12">
            <div className="flex gap-2 overflow-x-scroll scrollbar-hidden justify-start items-center text-sm">
              <p
                className="rounded bg-white border border-[#717FE0] text-black p-1 min-w-24 text-center cursor-pointer"
                onClick={resetFilters}
              >
                All Product
              </p>
              {categories.map((category: Category) => (
                <div key={category.id}>
                  <p
                    id={category.title}
                    className={`${
                      isSelected[category.title]
                        ? "bg-[#717FE0] text-white"
                        : "bg-white text-black"
                    } rounded p-1 px-2 text-center cursor-pointer`}
                    onClick={toggleFilter}
                  >
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-[60px] flex items-center justify-end gap-2 ml-3">
              <div className="rounded bg-[#717FE0] text-white p-1.5">
                <ArrowUpDown size={16} strokeWidth={1.75} />
              </div>
              <div className="rounded bg-[#717FE0] text-white p-1.5">
                <SlidersHorizontal size={16} strokeWidth={1.75} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row  w-full gap-3 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-center items-center"
                  id={product.name}
                >
                  <div className="w-48 h-64 p-3 shadow-sm bg-white md:w-64 md:h-full">
                    <div className="w-full h-48 overflow-hidden relative group md:h-80">
                      <div
                        className="w-full h-full object-cover items-center container transition-all ease-in-out duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${product.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="text-center">
                        <div className="w-8/12 rounded-full opacity-0 bg-white hover:bg-gray-800 hover:text-white hover:cursor-pointer p-2 absolute -bottom-1 group-hover:opacity-100 group-hover:bottom-2 right-1/2 translate-x-1/2 duration-300 transition-all">
                          <button className="text-sm">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-light text-sm">{product.name}</p>
                      <p className="font-bold text-xs">Rp.{product.price}</p>
                      <div className="self-end flex items-center justify-center h-2 cursor-pointer">
                        <p className="text-gray-300 font-bold text-lg">...</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
