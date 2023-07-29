import RootLayout from "@/components/Layout/RootLayout";
// import { removeProduct } from "@/redux/features/product/productSlice";
import { removeProduct } from "@/redux/features/product/productSlice";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PC_Builder = () => {
  const dispatch = useDispatch();
  const { buildPcComponents } = useSelector((state) => state.product);
  // const [motherboard, setMotherboard] = useState({});
  const [buildButton, setBuildButton] = useState(false);

  // console.log(buildPcComponents, "from pc builder");

  const motherboardExist = buildPcComponents.find(
    (product) => product.category === "motherboard"
  );
  const processorExist = buildPcComponents.find(
    (product) => product.category === "cpu-processor"
  );
  const enable = motherboardExist?._id && processorExist?._id;
  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  useEffect(() => {
    if (enable) {
      setBuildButton(true);
    } else {
      setBuildButton(false);
    }
  }, [enable]);

  // if (motherboardExist?._id && processorExist?._id) {
  //   setBuildButton(true);
  // }

  return (
    <div className="mx-auto max-w-[900px] flex items-center justify-center flex-col ">
      <div className="flex w-full justify-between items-center">
        {motherboardExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={motherboardExist.category}
                src={motherboardExist.image}
                height="180"
                width="120"
              />
              <div>
                <p className="ml-4">Name: {motherboardExist?.category}</p>
                <p className="ml-4">Price: {motherboardExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(motherboardExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Motherboard</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/motherboard">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {processorExist ? (
          <>
            {/* <Image
              alt={processorExist.category}
              src={processorExist.image}
              height="180"
              width="120"
            /> */}
            <div className="flex items-center">
              <Image
                alt={processorExist.category}
                src={processorExist.image}
                height="180"
                width="120"
              />
              <div>
                <p className="ml-4">Name: {processorExist?.category}</p>
                <p className="ml-4">Price: {processorExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(processorExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Processor</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/cpu-processor">Select</Link>
            </button>
          </>
        )}
      </div>
      <button
        onClick={() => toast.success("you build the pc successfully")}
        disabled={!buildButton}
        className="btn btn-primary mt-20"
      >
        Build PC
      </button>
    </div>
  );
};

export default PC_Builder;

PC_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
