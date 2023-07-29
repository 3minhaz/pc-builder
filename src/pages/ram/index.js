import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const RamPage = ({ ram }) => {
  return (
    <div>
      <h2>this is Ram page</h2>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=ram"
  );
  const ram = await res.json();

  return {
    props: {
      ram,
    },
  };
};
