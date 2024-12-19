import axios from "axios";
import React, { useEffect, useState } from "react";

import { AddToCard } from "./AddToCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import loadingImg from "../assets/loading/loading.gif";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useParams } from "react-router-dom";

function Categary({ category }) {
  console.log("category ", category);

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  const getProductData = async (event) => {
    try {
      if (!category) return;

      const API_KEY = `https://dummyjson.com/products/category/${category}`;
      setIsLoading(true);
      SetError(null);
      const response = await axios(API_KEY);
      const data = response.data.products;
      // console.log(data);
      setIsLoading(false);
      return setProducts(data);
    } catch (error) {
      setIsLoading(false);
      SetError(error.response.statusText);
      setProducts(null);
      console.log(error.response.statusText);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, [category]);

  return (
    // <div>Categary</div>
    <>
      <div className="ml-12 mr-12   p-5 rounded ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            350: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          // navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="flex  justify-center items-center ">
            {isLoading ? (
              <div className="font-extrabold text-4xl">
                <img src={loadingImg} alt="Loading..." />
              </div>
            ) : null}
            {error}
            {products?.map((value, index) => {
              let discountPrice = Math.ceil(
                value.price - value.discountPercentage * (value.price / 100)
              ).toFixed(2);

              return (
                <SwiperSlide key={value.id}>
                  <AddToCard
                    id={value.id}
                    className="bg-myTheme"
                    discount={`${Math.round(value.discountPercentage)}%`}
                    productName={value.title}
                    delPrice={`$${value.price.toFixed(2)}`}
                    newPrice={`$${discountPrice}`}
                    image={value.thumbnail}
                    rating={value.rating}
                  />{" "}
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Categary;
