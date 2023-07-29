import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MonitorPage = ({ monitor }) => {
  return (
    <div>
      <h2>this is monitor page</h2>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=monitor"
  );
  const monitor = await res.json();

  return {
    props: {
      monitor,
    },
  };
};
