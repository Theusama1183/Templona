import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="productSection py-28 bg-black h-full sm:h-screen">
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
      <div className="container m-auto mt-4 px-4 py-28 ">
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
      </div>
    </Layout>
  );
}
