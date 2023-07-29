import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PowerSupply = ({ power_supply }) => {
  return (
    <div>
      <h2>this is power supply</h2>
    </div>
  );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=power-supply"
  );
  const power_supply = await res.json();

  return {
    props: {
      power_supply,
    },
  };
};
