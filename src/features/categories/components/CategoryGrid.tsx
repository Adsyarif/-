import { categories, category } from "../hooks/useCategory";

const CategoryGrid = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="py-20 w-full flex flex-wrap justify-center xl:w-3/4">
        {categories.map((category: category) => (
          <div
            key={category.id}
            className=" relative flex justify-center items-center w-full overflow-hidden  h-[180px]  md:h-[240px] md:m-4 lg:w-[210px] md:w-[300px] lg:h-[180px]"
          >
            <div
              className={`cursor-pointer transition-transform ease-in-out flex justify-center object-cover items-center container w-full h-full hover:scale-110`}
              style={{
                backgroundImage: `url(${category.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full bg-white bg-opacity-60"></div>
            </div>
            <div className="absolute w-1/2 flex items-center justify-center hover:text-blue-700">
              <div className="bg-white bg-opacity-50 border border-gray-600 p-4 w-1/2 flex justify-center items-center md:w-full hover:bg-opacity-80">
                <h2 className="text-2xl font-bold p-2 lg:text-lg">
                  {category.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
