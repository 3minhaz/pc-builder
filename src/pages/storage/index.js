import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const Storage = ({ storage }) => {
  return (
    <div>
      <h2>this is storage device</h2>
    </div>
  );
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=storage"
  );
  const storage = await res.json();

  return {
    props: {
      storage,
    },
  };
};
