import { homePageFeatures } from "../features/featureMap";

const HomePage = () => {
  const { HeroBanner, CategoryGrid, DiscountBanner } = homePageFeatures;
  return (
    <>
      <div className="flex flex-col justify-center mt-7 pt-16 pb-[32px] md:mt-0">
        <HeroBanner />
        <CategoryGrid />
        <DiscountBanner />
      </div>
    </>
  );
};

export default HomePage;
