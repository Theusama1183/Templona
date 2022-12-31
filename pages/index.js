import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const clickPoint = useRef();
  const handleFocus = () => {
    clickPoint.current.style.display = "none";
  };

  const handleBlur = () => {
    clickPoint.current.style.display = "block";
  };
  return (
    <Layout title="Home">
      <div className="bennerSection py-28 bg-black h-full">
        <div className="container m-auto mt-4 px-4 pt-20">
          <div className="block justify-between md:flex">
            <div className="content w-full sm:w-2/5">
              <h1 className=" text-7xl font-semibold text-white">
                Discover <br />
                Most Suitable <br />
                Watches
              </h1>
              <p className="text-2xl text-white mt-10">
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <form method="get">
                <div className="relative mr-3 mt-10 mb-10">
                  <div
                    className="absolute top-6 left-3 items-center"
                    ref={clickPoint}
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block p-2 pl-10 w-full focus-visible:outline-none py-5 text-gray-900 bg-white rounded border"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name="q"
                  />
                </div>
              </form>
            </div>
            <div className="image w-full sm:w-1/2 flex justify-center">
              <img src="banner-image.png" alt="" className="f" />
            </div>
          </div>
        </div>
      </div>
      <div className="categorySection py-28 h-full">
        <div className="container m-auto mt-4 px-4">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
            <div className="group block sm:flex rounded-3xl bg-gray-100 p-6 sm:p-10">
              <div className="categoryImage mb-5 sm:mb-0">
                <img
                  src="category/category-1.png"
                  alt=""
                  className="max-w-md"
                />
              </div>
              <div className="categoryContent ml-8">
                <h4 className="text-4xl font-bold">Apple</h4>
                <p className="text-xl mt-4">
                  Apple is one of the most famous smart watches providing
                  company.
                </p>
              </div>
            </div>
            <div className="group block sm:flex rounded-3xl bg-gray-100 p-6 sm:p-10">
              <div className="categoryImage mb-5 sm:mb-0">
                <img
                  src="category/category-2.png"
                  alt=""
                  className="max-w-md"
                />
              </div>
              <div className="categoryContent ml-8">
                <h4 className="text-4xl font-bold">Xiaomi</h4>
                <p className="text-xl mt-4">
                  Xiaomi smart watches are produced by MI company.
                </p>
              </div>
            </div>
            <div className="group block sm:flex rounded-3xl bg-gray-100 p-6 sm:p-10">
              <div className="categoryImage mb-5 sm:mb-0">
                <img
                  src="category/category-3.png"
                  alt=""
                  className="max-w-md"
                />
              </div>
              <div className="categoryContent ml-8">
                <h4 className="text-4xl font-bold">FitBit</h4>
                <p className="text-xl mt-4">
                  FitBit smart watches are best for there health and fitness
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="productSection container m-auto mt-4 px-4 py-28 ">
        <div className="content pb-7 text-center">
          <h4 className="text-2xl text-red-500">
            Find your favourite smart watch.
          </h4>
          <h2 className="text-4xl font-semibold text-black">
            Our Latest Products
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            type="button"
            className="bg-red-500 px-10 py-5 rounded-2xl text-white"
          >
            View More
          </button>
        </div>
      </div>
      <div className="testimonialSection container m-auto mt-8 mb-20 px-4">
        <div className="content pb-7 text-center">
          <h4 className="text-2xl text-red-500">
            Here are our some of the best clients.
          </h4>
          <h2 className="text-4xl font-semibold text-black">
            What People Say About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          <div className="group block sm:flex rounded-3xl bg-gray-100 p-6 sm:p-10">
            <div className="categoryImage sm:mb-0 mb-5">
              <img
                src="testimonials/review-2.png"
                alt=""
                className="sm:max-w-md w-full"
              />
            </div>
            <div className="categoryContent ml-8">
              <h4 className="text-4xl font-bold">Hamza Faizi</h4>
              <p className="text-xl mt-4">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <img src="Stars.png" alt="" className="mt-3" />
            </div>
          </div>
          <div className="group block sm:flex rounded-3xl bg-gray-100 p-6 sm:p-10">
            <div className="categoryImage sm:mb-0 mb-5">
              <img
                src="testimonials/review-1.png"
                alt=""
                className="sm:max-w-md w-full"
              />
            </div>
            <div className="categoryContent ml-8">
              <h4 className="text-4xl font-bold">Hafiz Huzaifa</h4>
              <p className="text-xl mt-4">
                I’ve been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </p>
              <img src="Stars.png" alt="" className="mt-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="newsletterSection container m-auto mt-20 mb-20 md:pl-52 pr-10 bg-gray-100 rounded-3xl p-10">
        <div className="block justify-between md:flex">
          <div className="content flex flex-col justify-center w-full sm:w-2/5 ">
            <h1 className=" md:text-7xl text-5xl font-semibold ">
              Subscribe To Newsletter
            </h1>
            <p className="text-2xl mt-10 ">
              Get free guide about smart watches daily.
            </p>
            <iframe
              width="100%"
              height="400"
              src="https://a0f4aa05.sibforms.com/serve/MUIEAHCjP8sET1MsqJcBj8ZnAoim9ziWd4VSovXgkB1FB5GMnnITxhlI1hjRmeKvuLnCJPS6dXp4L29rlEJ-s3s45seVHZ5xpMHTy1V5Em7VDUS4V4YTVfqBoCkrhw42mNSDOI8oOBjW_RNbLW3cXg1RWfmhspobBj9lp0Hx0xlLH69iwdbZR5T-49g33QiPqsfBGZSj5Fwi3La_"
              frameborder="0"
              scrolling="auto"
              allowfullscreen
              className="w-full -ml-12 "
            ></iframe>
          </div>
          <div className="image w-full sm:w-1/2 flex justify-center sm:mt-0 mt-7">
            <img src="neslator-image.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
