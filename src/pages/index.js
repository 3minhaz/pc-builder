// import Image from "next/image";
// import { Inter } from "next/font/google";

import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProduct from "@/components/UI/FeaturedProduct";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log(data, "from index");
  return (
    <div>
      <Banner></Banner>
      <FeaturedCategories></FeaturedCategories>
      <FeaturedProduct data={data?.data}></FeaturedProduct>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/getHomeProducts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
