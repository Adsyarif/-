const HomePage = () => {
  interface category {
    id: number;
    title: string;
    imgUrl: string;
  }

  const categories: category[] = [
    {
      id: 1,
      title: "Hats",
      imgUrl: "/bg-2.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imgUrl: "/bg-3.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imgUrl: "/bg-4.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imgUrl: "/bg-2.jpg",
    },
    {
      id: 5,
      title: "Mens",
      imgUrl: "/bg-3.jpg",
    },
    {
      id: 6,
      title: "Mens",
      imgUrl: "/bg-4.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center mt-7 pt-16 pb-[32px] md:mt-0">
        <div className="flex items-center justify-center bg-[url('./bg-1.jpg')] bg-center w-full h-[350px] object-cover bg-cover md:h-[450px] lg:h-[600px] lg:bg-no-repeat">
          <div className="p-4 w-full md:p-28 md:w-3/4">
            <div className="flex flex-col gap-3 items-start">
              <p>Brand</p>
              <h1 className="text-3xl font-light md:text-5xl">New Colection</h1>
              <button className="bg-blue-700 py-4 px-16 text-white mt-5">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="p-4 w-full flex flex-wrap justify-center gap-5 md:p-28 md:w-3/4">
            {categories.map((category) => {
              console.log(category.imgUrl);
              return (
                <div
                  className={`flex justify-center items-center container w-full h-48 border md:w-[210px] md:h-[180px] xl:w-[350px] xl:h-[240px]`}
                  style={{
                    backgroundImage: `url(${category.imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    key={category.id}
                    className="bg-white w-full h-full flex items-center justify-center bg-opacity-60"
                  >
                    <h2 className="text-2xl font-bold cursor-pointer hover:text-blue-700">
                      {category.title}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="p-4 w-full bg-[url(/bg-5.jpg)] bg-no-repeat bg-cover md:p-28 md:w-3/4"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
