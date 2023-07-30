import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProduct from "@/components/UI/FeaturedProduct";

export default function Home({ data }) {
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
  if (typeof window === "undefined") {
    // return {
    //   props: {
    //     data: [],
    //   },
    // };

    ///
    const res = await fetch(
      "https://pc-builder-gules.vercel.app/api/getHomeProducts"
      // "http://localhost:3000/api/getHomeProducts"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } else {
    const res = await fetch(
      "https://pc-builder-gules.vercel.app/api/products"
      // "http://localhost:3000/api/products"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
    // const res = await fetch(
    //   "https://pc-builder-gules.vercel.app/api/getHomeProducts"
    //   // "http://localhost:3000/api/getHomeProducts"
    // );
    // const data = await res.json();
    // return {
    //   props: {
    //     data,
    //   },
    // };
  }
};
