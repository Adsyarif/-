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
        {/* Feature hero banner */}
        <div className="flex p-4 items-center justify-center bg-[url('./bg-1.jpg')] bg-center w-full h-[350px] object-cover bg-cover md:h-[450px] lg:h-[600px] lg:bg-no-repeat">
          <div className="p-4 w-full xl:p-28 xl:w-3/4">
            <div className="flex flex-col gap-6 items-start">
              <p>Brand</p>
              <h1 className="text-3xl font-light md:text-7xl">New Colection</h1>
              <button className="bg-[#0315ff] py-4 px-16 text-white mt-5">
                Shop Now!
              </button>
            </div>
          </div>
        </div>

        {/* Feature Category */}
        <div className="flex items-center justify-center w-full">
          <div className="py-20 w-full flex flex-wrap justify-center xl:w-3/4">
            {categories.map((category) => (
              <>
                <div className=" relative flex justify-center items-center w-full overflow-hidden  h-[180px]  md:h-[240px] md:m-4 lg:w-[210px] md:w-[300px] lg:h-[180px]">
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
                    <div
                      key={category.id}
                      className="bg-white bg-opacity-60 border border-black p-4 w-1/2 flex justify-center items-center md:w-full"
                    >
                      <h2 className="text-2xl font-bold p-2 lg:text-lg">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Feature Discount Sale */}
        <div className="px-4 w-full flex justify-center">
          <div className="flex justify-between items-center p-4 w-full h-96 bg-[url(/bg-5.jpg)] bg-center bg-no-repeat bg-cover md:h-[550px] xl:w-3/4">
            <div className="w-1/2 lg:w-7/12"></div>
            <div className="w-1/2 flex flex-col items-end md:items-start xl:w-5/12">
              <div>
                <div className="flex flex-col gap-3">
                  <p className="text-red-600 text-xl font-bold lg:text-2xl">
                    -60%
                  </p>
                  <p className="text-2xl font-bold md:text-5xl lg:text-6xl">
                    Global Sale
                  </p>
                </div>
                <button className="text-sm bg-[#0315ff] py-4 px-8 text-white mt-12 h-[50px] min-w-[170px]">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature top product */}
      </div>
    </>
  );
};

export default HomePage;
