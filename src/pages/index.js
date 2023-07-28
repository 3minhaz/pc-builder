// import Image from "next/image";
// import { Inter } from "next/font/google";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
