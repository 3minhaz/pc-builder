import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const RamPage = () => {
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
