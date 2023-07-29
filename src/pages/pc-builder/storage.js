import RootLayout from "@/components/Layout/RootLayout";
import { addMotherboard } from "@/redux/features/product/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Storage = ({ storage }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { data: products } = storage;

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
            <h2 className="card-title">{product?.productName}</h2>
            <p>
              {product?.description.length > 150
                ? product?.description.slice(0, 150) + "...."
                : product?.description}
            </p>
            <div>
              <p>Price: {product?.price}</p>
              <p>Category: {product?.category}</p>
            </div>
            <div>
              <p>Status: {product?.status}</p>
              <p>Rating: {product?.rating}</p>
            </div>
            <div className="card-actions">
              <button
                onClick={() => handleSelect(product)}
                className="btn btn-primary"
              >
                Add to Builder
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-gules.vercel.app/api/products?category=storage"
  );
  const storage = await res.json();

  return {
    props: {
      storage,
    },
  };
};
