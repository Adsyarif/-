const DiscountBanner = () => {
  return (
    <div className="px-4 w-full flex justify-center pb-[32px]">
      <div className="flex justify-between items-center p-4 w-full h-96 bg-[url(/bg-5.jpg)] bg-center bg-no-repeat bg-cover md:h-[550px] xl:w-3/4">
        <div className="w-1/2 lg:w-7/12"></div>
        <div className="w-1/2 flex flex-col items-end md:items-start xl:w-5/12">
          <div>
            <div className="flex flex-col gap-3">
              <p className="text-red-600 text-xl font-bold lg:text-2xl">-60%</p>
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
  );
};

export default DiscountBanner;
