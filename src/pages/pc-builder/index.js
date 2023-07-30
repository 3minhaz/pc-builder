import RootLayout from "@/components/Layout/RootLayout";
import { removeProduct } from "@/redux/features/product/productSlice";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PC_Builder = () => {
  const dispatch = useDispatch();
  const { buildPcComponents } = useSelector((state) => state.product);

  const [buildButton, setBuildButton] = useState(false);

  const motherboardExist = buildPcComponents.find(
    (product) => product.category === "motherboard"
  );
  const processorExist = buildPcComponents.find(
    (product) => product.category === "cpuProcessor"
  );
  const ramExist = buildPcComponents.find(
    (product) => product.category === "ram"
  );
  const powerSupplyExist = buildPcComponents.find(
    (product) => product.category === "powerSupply"
  );
  const storageExist = buildPcComponents.find(
    (product) => product.category === "storage"
  );
  const monitorExist = buildPcComponents.find(
    (product) => product.category === "monitor"
  );
  // const casingExist = buildPcComponents.find(
  //   (product) => product.category === "casing"
  // );
  const enable =
    motherboardExist?._id &&
    processorExist?._id &&
    ramExist?._id &&
    powerSupplyExist?._id &&
    storageExist?._id &&
    monitorExist?._id;

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

  return (
    <div className="my-10 mx-auto max-w-[900px] flex items-center justify-center flex-col ">
      <h2 className="text-2xl font-bold mb-10">
        {" "}
        Please select all required field: <small>note: * is required</small>
      </h2>
      <div className="flex w-full justify-between items-center">
        {motherboardExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={motherboardExist.category}
                src={motherboardExist.image}
                height="150"
                width="100"
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
            <h2>Motherboard *</h2>
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
            <div className="flex items-center">
              <Image
                alt={processorExist.category}
                src={processorExist.image}
                height="150"
                width="100"
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
            <h2>Processor *</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/cpu-processor">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {ramExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={ramExist.category}
                src={ramExist.image}
                height="150"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {ramExist?.category}</p>
                <p className="ml-4">Price: {ramExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(ramExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Ram *</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/ram">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {powerSupplyExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={powerSupplyExist.category}
                src={powerSupplyExist.image}
                height="150"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {powerSupplyExist?.category}</p>
                <p className="ml-4">Price: {powerSupplyExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(powerSupplyExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Power Supply *</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/power-supply">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {storageExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={storageExist.category}
                src={storageExist.image}
                height="150"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {storageExist?.category}</p>
                <p className="ml-4">Price: {storageExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(storageExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Storage *</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/storage">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <div className="flex w-full justify-between items-center">
        {monitorExist ? (
          <>
            <div className="flex items-center">
              <Image
                alt={monitorExist.category}
                src={monitorExist.image}
                height="150"
                width="100"
              />
              <div>
                <p className="ml-4">Name: {monitorExist?.category}</p>
                <p className="ml-4">Price: {monitorExist?.price}</p>
              </div>
            </div>
            <p onClick={() => handleRemove(monitorExist)} className="btn">
              X
            </p>
          </>
        ) : (
          <>
            <h2>Monitor *</h2>
            <button className="btn btn-accent">
              <Link href="/pc-builder/monitor">Select</Link>
            </button>
          </>
        )}
      </div>
      <div className="divider mt-4"></div>
      <button
        onClick={() => toast.success("you build the pc successfully")}
        disabled={!buildButton}
        className="btn btn-primary mt-20"
      >
        Complete Build
      </button>
    </div>
  );
};

export default PC_Builder;

PC_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
