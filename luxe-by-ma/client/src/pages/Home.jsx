import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </MainLayout>
  );
}

export default Home;