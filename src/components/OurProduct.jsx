import React, { useEffect, useState } from "react";
import MyCountBox from "./MyCountBox";
import { AddToCard } from "./AddToCard";
import { Link } from "react-router-dom";
import apper2 from "../assets/images/apper2.png";
import babycar from "../assets/images/babycar.png";
import dogfood from "../assets/images/dogfood.png";
import laptop from "../assets/images/laptop.png";
import game2 from "../assets/images/game2.png";
import shose from "../assets/images/shose.png";
import camera from "../assets/images/camera.png";
import chair from "../assets/images/chair.png";
import { SlHeart } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import axios from "axios";
import loadingImg from "../assets/loading/loading.gif";

// let AddToCardlist = [
//   {
//     discount: "-40%",
//     productName: "HAVIT HV-G92 Gamepad",
//     delPrice: "$160",
//     newPrice: "$120",
//     starRank: "(88)",
//     image: dogfood,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     discount: "-35%",
//     productName: "AK-900 Wired Keyboard",
//     delPrice: "$400",
//     newPrice: "$370",
//     starRank: "(99)",
//     image: babycar,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     discount: "-30%",
//     productName: "IPS LCD Gaming Monitor",
//     delPrice: "$400",
//     newPrice: "$350",
//     starRank: "(77)",
//     image: apper2,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     discount: "-25%",
//     productName: "S-Series Comfort Chair",
//     delPrice: "$400",
//     newPrice: "$375",
//     starRank: "(99)",
//     image: shose,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
// ];
// let AddToCardlist2 = [
//   {
//     discount: "New",
//     className: "bg-[#00FF66]",
//     productName: "HAVIT HV-G92 Gamepad",
//     delPrice: "$160",
//     newPrice: "$120",
//     starRank: "(88)",
//     image: camera,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     // discount: "-35%",
//     productName: "AK-900 Wired Keyboard",
//     delPrice: "$400",
//     newPrice: "$370",
//     starRank: "(99)",
//     image: laptop,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     discount: "New",
//     className: "bg-[#00FF66]",
//     productName: "IPS LCD Gaming Monitor",
//     delPrice: "$400",
//     newPrice: "$350",
//     starRank: "(77)",
//     image: game2,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
//   {
//     // discount: "-25%",
//     productName: "S-Series Comfort Chair",
//     delPrice: "$400",
//     newPrice: "$375",
//     starRank: "(99)",
//     image: chair,
//     hearticon: <SlHeart />,
//     eyeicon: <FiEye />,
//   },
// ];

function OurProduct() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  const API_KEY = "https://dummyjson.com/products?limit=8&skip=100";
  let getProductData = async (event) => {
    try {
      setIsLoading(true);
      SetError(null);
      let response = await axios(API_KEY);
      let data = response.data.products;
      // console.log(data);
      setIsLoading(false);
      return setProducts(data);
    } catch (error) {
      setIsLoading(false);
      SetError(error.response?.statusText);
      setProducts(null);
      console.log(error.response.statusText);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none">
          <img src={loadingImg} alt="Loading..." />
        </div>
      ) : (
        <>
          {" "}
          <div className="ml-5">
            <MyCountBox name="Explore Our Products" days="Our Products" />
          </div>
          <div className=" flex justify-center items-center  my-14  flex-row">
            <div className="flex 2xl:w-[1170px] xl:w-[1170px] lg:w-auto 2xl:h-[732px] xl:h-[732px] lg:h-auto md:w-auto md:h-auto sm:w-auto sm:h-auto mobile:w-auto mobile:h-auto sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row my-3 lg:flex-row lg:gap-4 gap-[30px]">
              {products?.map((value, index) => {
                let discountPrice = Math.ceil(
                  value.price - value.discountPercentage * (value.price / 100)
                ).toFixed(2);

                return (
                  <div key={value.id}>
                    {" "}
                    <AddToCard
                      // className='bg-myTheme'
                      // discount={value.discount}
                      key={value.id}
                      id={value.id}
                      className="bg-myTheme"
                      discount={`${Math.round(value.discountPercentage)}%`}
                      productName={value.title}
                      delPrice={`$${value.price.toFixed(2)}`}
                      newPrice={`$${discountPrice}`}
                      image={value.thumbnail}
                      rating={value.rating}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center my-3">
            <div className="">
              <Link
                data-aos="zoom-in"
                to={"/AllProduct"}
                className="bg-myTheme rounded cursor-pointer active:bg-red-700 text-white w-[234px] h-[56px] flex justify-center items-center"
              >
                Show More
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default OurProduct;
