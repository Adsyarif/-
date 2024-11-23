const HomePage = () => {
  interface category {
    id: number;
    title: string;
  }

  const categories: category[] = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
    {
      id: 6,
      title: "Mens",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center mt-7 pt-16 pb-[32px] md:mt-0">
        <div className="flex items-center justify-center bg-[url('./bg-1.jpg')] bg-center w-full h-[350px] object-cover bg-cover md:h-[450px] lg:h-[600px] lg:bg-no-repeat">
          <div className="p-4 w-full md:w-3/4 xl:w-1/2">
            <div className="flex flex-col gap-3 items-start">
              <p>Brand</p>
              <h1 className="text-3xl md:text-5xl">New Colection</h1>
              <button className="bg-blue-700 py-4 px-16 text-white mt-5">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="py-16 px-4 flex items-center justify-center w-full md:px-0">
          <div className="flex flex-wrap w-full gap-6 justify-between md:w-3/4 lg:gap-0 xl:w-1/2">
            {categories.map((category) => (
              <div className="flex justify-center items-end container w-full h-48 border bg-[url('./bg-1.jpg')] md:w-56 md:h-52 lg:w-1/2 lg:h-64">
                <div key={category.id} className="">
                  <h2 className="">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
