import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MotherboardPage = () => {
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
