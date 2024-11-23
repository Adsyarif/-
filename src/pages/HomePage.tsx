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
  ];

  return (
    <>
      <div className="mt-7 pt-16 pb-[32px] md:mt-0">
        <div className="flex items-center justify-center bg-[url('./bg-1.jpg')] bg-center w-full h-[350px] object-cover bg-cover md:bg-center md:h-[450px] lg:h-[600px] lg:bg-no-repeat">
          <div className="p-4 w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col gap-4 items-start">
              <p>Brand</p>
              <h1 className="text-3xl md:text-5xl">New Colection</h1>
              <button className="bg-blue-700 py-4 px-16 text-white">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
        {categories.map((category) => (
          <div className="category-container">
            {<img />}
            <div key={category.id} className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
