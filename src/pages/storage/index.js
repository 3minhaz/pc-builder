import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const Storage = () => {
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
