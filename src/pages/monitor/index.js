import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const MonitorPage = () => {
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
