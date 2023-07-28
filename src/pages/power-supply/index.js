import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PowerSupply = () => {
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
