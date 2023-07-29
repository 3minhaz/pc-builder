import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addMotherboard } from "@/redux/features/product/productSlice";

const Motherboard = ({ motherboard }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { data: products } = motherboard;

  const handleSelect = (product) => {
    dispatch(addMotherboard(product));
    router.push("/pc-builder");
  };

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <div key={product._id} className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            {/* <img src={product?.image} className="rounded-xl" /> */}
            <Image
              src={product?.image}
              height="290"
              width="250"
              alt={product?.category}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button
                onClick={() => handleSelect(product)}
                className="btn btn-primary"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=motherboard"
  );
  const motherboard = await res.json();

  return {
    props: {
      motherboard,
    },
  };
};
