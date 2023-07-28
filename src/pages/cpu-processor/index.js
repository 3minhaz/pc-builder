import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const CPU = () => {
  return (
    <div>
      <h2>this is CPU page</h2>
    </div>
  );
};

export default CPU;

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
