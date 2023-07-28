import Image from "next/image";
import img1 from "../../assets/images/desktop-deal-live-now-home-banner-982x500.webp";
import img2 from "../../assets/images/mi-a2-l43m7-eaukr-01-500x500.webp";
import img3 from "../../assets/images/pro-mp241x-0001-500x500.png";
import img4 from "../../assets/images/tuf-gaming-geforce-gtx-1630-oc-edition-01-500x500.webp";
import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[350px] lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          // src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
          src={img1}
          alt="banner"
          // sizes="100vw"
          layout="responsive"
          // responsive
          // width="982"
          // height="50"
          // objectFit="cover"
          // fill
          // className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          // src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp241x/pro-mp241x-0001-500x500.png"
          src={img2}
          alt="banner"
          // sizes="100vw"
          layout="responsive"
          // responsive
          // width={982}
          // height={200}
          // objectFit="cover"
          // fill
          // className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          // src="https://www.startech.com.bd/image/cache/catalog/television/xiaomi/mi-a2-l43m7-eaukr/mi-a2-l43m7-eaukr-01-500x500.webp"
          src={img3}
          alt="banner"
          // sizes="100vw"
          layout="responsive"
          // responsive
          // width={982}
          // height={200}
          // objectFit="cover"
          // fill
          // className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* <div id="slide4" className="carousel-item relative w-full pt-[100%]">
        <Image
          // src="https://www.startech.com.bd/image/cache/catalog/graphics-card/asus/tuf-gaming-geforce-gtx-1630-oc-edition/tuf-gaming-geforce-gtx-1630-oc-edition-01-500x500.webp"
          src={img4}
          alt="banner"
          // sizes="100vw"
          // responsive
          layout="responsive"
          // width={982}
          // height={200}
          // objectFit="cover"
          // fill
          // className="w-full h-1/2 top-0 left-0 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
