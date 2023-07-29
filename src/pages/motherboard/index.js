import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MotherboardPage = ({ motherboard }) => {
  return (
    <div>
      <h2>this is mother board page</h2>
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=motherboard"
  );
  const motherboard = await res.json();

  return {
    props: {
      motherboard,
    },
  };
};
