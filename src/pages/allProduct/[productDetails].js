import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ data }) => {
  const { data: product } = data;
  return (
    <div>
      <div className="hero ">
        <div className=" hero-content flex-col lg:flex-row">
          <div className="lg:mr-48">
            <Image
              src={product?.image}
              alt={product.productName}
              width="400"
              height="300"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{product?.productName}</h1>
            <p className="pt-4">Category: {product?.category}</p>
            <p className="pt-2">Status: {product?.status}</p>
            <p className="pt-2">Price: {product?.price}</p>
            <p className="pt-2">Key Features: {product?.keyFeatures}</p>
            <p className="pt-2">My Rating: {product?.rating}</p>
            <p className="pt-2">Average Rating: {product?.averageRating}</p>
            <p className="font-bold">User Reviews</p>
            {product?.reviews.map((singleReview, i) => (
              <ul key={i}>
                {" "}
                <div className="flex">
                  <li className="mr-2">User: {singleReview.username} </li>
                  <li> Rating: {singleReview.rating}</li>
                </div>
              </ul>
            ))}
            <p className="py-4">Description: {product?.description}</p>
            <button className="btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-gules.vercel.app/api/products`);
  const { data: product } = await res.json();

  const paths = product.map((product) => ({
    params: { productDetails: product._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params, "from");
  const res = await fetch(
    `https://pc-builder-gules.vercel.app/api/${params.productDetails}`
  );
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      data,
    },
  };
};
