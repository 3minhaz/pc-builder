import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const CPU = ({ cpu }) => {
  // console.log(cpu, "from cpu");
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

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=cpu-processor"
  );
  const cpu = await res.json();

  return {
    props: {
      cpu,
    },
  };
};
