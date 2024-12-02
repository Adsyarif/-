const UserDetailHeader = () => {
  return (
    <div className="bg-white w-1/2 flex flex-col justify-center items-center ">
      <div className="m-4 w-full flex flex-col items-center justify-center border-r">
        <div
          className="w-[90px] h-[90px] p-4 items-center justify-center rounded-full"
          style={{
            backgroundImage: `url(/Profile.jpg)`, //fetch from BE
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="p-2 flex flex-col w-full px-10 gap-3 justify-center items-center cursor-default">
          {/*fetch from BE */}
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-center">Kaito Kid</div>
            <div className="text-">Rp.250.000</div>
          </div>
          <div className="group flex flex-col gap-3 w-full">
            <div className="relative">
              <div className="bg-black h-[1px] w-full"></div>
              <div className="absolute bottom-0 left-1/2 translate-y-1/2  w-0 h-[1px] bg-[#717FE0] transition-all duration-500 group-hover:w-1/2"></div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 w-0 h-0 bg-[#717FE0] rounded-full transition-all duration-700 group-hover:w-2 group-hover:h-2"></div>
              <div className="absolute bottom-0 right-1/2 translate-y-1/2  w-0 h-[1px] bg-[#717FE0] transition-all duration-500 group-hover:w-1/2"></div>
            </div>
            <div className="flex justify-center gap-2 w-full group-hover:text-[#717FE0]">
              <div className="text-xs font-bold">Point</div>
              <div className="flex items-center gap-1 cursor-pointer">
                {/*fetch from BE */}
                <div className="text-xl">335</div>
                <div className="text-xs">pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailHeader;
