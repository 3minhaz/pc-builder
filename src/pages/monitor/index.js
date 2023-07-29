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
    "http://localhost:3000/api/products?category=monitor"
  );
  const monitor = await res.json();

  return {
    props: {
      monitor,
    },
  };
};
