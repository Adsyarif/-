import { homePageFeatures } from "../features/featureMap";
import MainLayout from "../layouts/MainPageLayout";

const HomePage = () => {
  const { HeroBanner, CategoryGrid, DiscountBanner } = homePageFeatures;
  return (
    <MainLayout>
      <HeroBanner />
      <CategoryGrid />
      <DiscountBanner />
    </MainLayout>
  );
};

export default HomePage;
