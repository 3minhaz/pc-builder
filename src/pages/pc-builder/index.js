import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const PC_Builder = () => {
  return (
    <div>
      <h2>this is pc builder page</h2>
    </div>
  );
};

export default PC_Builder;

PC_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
