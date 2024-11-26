const HeroBanner = () => {
  return (
    <div
      className="flex p-4 items-center justify-center w-full h-[350px] md:h-[450px] lg:h-[600px] "
      style={{
        backgroundImage: `url(/bg-1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
  );
};

export default HeroBanner;
