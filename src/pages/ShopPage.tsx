import MainLayout from "../layouts/MainPageLayout";
import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/productContext";
import {
  ArrowUpDown,
  Circle,
  Heart,
  Plus,
  ShoppingBag,
  SlidersHorizontal,
} from "lucide-react";
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
      <div className="flex flex-col justify-center items-center p-6 bg-gray-50">
        <div className="w-full lg:w-3/4">
          <div className="self-start mb-4">
            <p className="text-sm text-gray-500">Home / Shop</p>
          </div>
          <div className="flex w-full items-center justify-between mb-8 gap-10">
            <div className="flex gap-4 overflow-x-auto scrollbar-hidden items-center text-sm">
              <p
                className="rounded bg-white border border-blue-500 text-blue-500 px-4 py-2 min-w-30 text-center cursor-pointer hover:bg-blue-500 hover:text-white transition"
                onClick={resetFilters}
              >
                All Products
              </p>
              {categories.map((category: Category) => (
                <div key={category.id}>
                  <p
                    id={category.title}
                    className={`rounded px-4 py-2 text-center cursor-pointer transition min-w-20 ${
                      isSelected[category.title]
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={toggleFilter}
                  >
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded bg-blue-500 text-white p-2 hover:bg-blue-600 transition">
                <ArrowUpDown size={16} strokeWidth={1.75} />
              </button>
              <button className="rounded bg-blue-500 text-white p-2 hover:bg-blue-600 transition">
                <SlidersHorizontal size={16} strokeWidth={1.75} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col  bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                  id={product.name}
                >
                  <div className="w-full h-48 md:h-64 overflow-hidden bg-gray-100 relative group">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.imageUrl})` }}
                    ></div>
                    <button className="rounded-full opacity-0 bg-white hover:bg-gray-800 hover:text-white hover:cursor-pointer p-2 absolute -bottom-1 group-hover:opacity-100 group-hover:bottom-5 right-1/2 translate-x-1/2 duration-300 transition-all">
                      Quick View
                    </button>
                    <Circle
                      className="cursor-pointer absolute bottom-2 right-2 -translate-x-2 duration-300 transition-all fill-red-500"
                      strokeWidth={0}
                      size={20}
                    />
                  </div>
                  <div className="p-4 flex justify-between">
                    <div>
                      <p className="text-sm font-light text-gray-700">
                        {product.name}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        Rp. {product.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="relative hover:text-red-400 cursor-pointer">
                        <Heart size={20} />
                        <div className="absolute left-1 top-3 translate-x-1 bg-white rounded-xl">
                          <Plus size={15} />
                        </div>
                      </div>
                      <div className="relative hover:text-blue-400 cursor-pointer">
                        <ShoppingBag size={20} />
                        <div className="absolute left-1 top-3 translate-x-1 bg-white rounded-xl">
                          <Plus size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products available
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
