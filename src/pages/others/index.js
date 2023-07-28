import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const OthersPage = () => {
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
