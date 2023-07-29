import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const OthersPage = ({ others }) => {
  return (
    <div>
      <h2>this is others page</h2>
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=others"
  );
  const others = await res.json();

  return {
    props: {
      others,
    },
  };
};
