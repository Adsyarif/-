import MainLayout from "../layouts/MainPageLayout";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productContext";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { categories, Category } from "../features/categories/hooks/useCategory";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <MainLayout>
      <div className="flex flex-col items-center w-full p-4">
        <div className="self-start mb-2">
          <p className="text-xs">Home/shop</p>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex gap-2 overflow-hidden justify-center items-center text-sm">
            {categories.map((category: Category) => (
              <div key={category.id}>
                <p className="rounded bg-[#717FE0] text-white p-1">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[60px] flex items-center justify-end gap-2">
            <div className="rounded bg-[#717FE0] text-white p-1.5">
              <ArrowUpDown size={16} strokeWidth={1.75} />
            </div>
            <div className="rounded bg-[#717FE0] text-white p-1.5">
              <SlidersHorizontal size={16} strokeWidth={1.75} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center w-full">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="w-1/2 h-64 p-2 shadow-sm bg-white group"
              >
                <div className="w-full h-48 relative group">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${product.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="text-center">
                    <div className="w-8/12 rounded-full opacity-0 bg-white p-2 absolute -bottom-1 group-hover:opacity-100 group-hover:bottom-2 right-1/2 translate-x-1/2 duration-300 transition-all">
                      <button className="text-sm">Quick View</button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-light text-sm">{product.name}</p>
                  <p className="font-bold text-xs">Rp.{product.price}</p>
                  <div className="self-end flex items-center justify-center h-2">
                    <p className="text-gray-300 font-bold text-lg">...</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
