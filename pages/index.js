import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bennerSection py-28 bg-black h-full">
        <div className="container m-auto mt-4 px-4">
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
              <form action="" method="get">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Find the best brands"
                  className="py-7 px-3 w-full mt-7 rounded-3xl placeholder:text-xl focus: text-xl focus-visible:outline-none"
                />
                <button
                  type="button"
                  className="bg-blue-500 px-10 py-5 rounded-2xl absolute mt-9 -ml-32 text-white"
                >
                  Search
                </button>
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
          <h4 className="text-2xl text-blue-500">
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
            className="bg-blue-500 px-10 py-5 rounded-2xl text-white"
          >
            View More
          </button>
        </div>
      </div>
      <div className="testimonialSection container m-auto mt-8 mb-20 px-4">
        <div className="content pb-7 text-center">
          <h4 className="text-2xl text-blue-500">
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
            <form action="" method="Post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="py-7 px-3 w-full mt-7 rounded-3xl placeholder:text-xl focus: text-xl focus-visible:outline-none"
              />
              <button
                type="button"
                className="bg-blue-500 px-10 py-5 rounded-2xl absolute mt-9 -ml-40 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="image w-full sm:w-1/2 flex justify-center sm:mt-0 mt-7">
            <img src="neslator-image.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
