import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className="categorySection py-28 h-full">
        <div className="container m-auto mt-4 px-4">
          <div className="bg-white">
            <div className="pt-6">
              <nav aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                  <li>
                    <div className="flex items-center">
                      <a
                        href="/"
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        Home
                      </a>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <a
                        href={product.slug}
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        {product.brand}
                      </a>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>

                  <li className="text-sm">
                    <a
                      href="#"
                      aria-current="page"
                      className="font-medium text-gray-500 hover:text-gray-600"
                    >
                      Basic Tee 6-Pack
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="mx-auto mt-24 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className=" overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="slugyImage object-cover object-center"
                  />
                </div>
                <div className="mt-4 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>

                  <div className="flex mt-2">
                    <p className=" text-3xl tracking-tight m-1 line-through text-gray-600 font-semibold">
                      ${product.price}
                    </p>
                    <p className=" text-3xl tracking-tight m-1 text-black  font-semibold">
                      ${product.salePrice}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <svg
                          className="text-gray-900 h-5 w-5 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="text-gray-900 h-5 w-5 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="text-gray-900 h-5 w-5 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="text-gray-900 h-5 w-5 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="text-gray-200 h-5 w-5 flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="sr-only">4 out of 5 stars</p>
                      <a
                        href="#"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {product.numReviews} reviews
                      </a>
                    </div>
                  </div>
                  <form className="mt-10">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <fieldset className="mt-4">
                        <legend className="sr-only">Choose a color</legend>
                        <div className="flex items-center space-x-3">
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="White"
                              className="sr-only"
                              aria-labelledby="color-choice-0-label"
                            />
                            <span id="color-choice-0-label" className="sr-only">
                              {" "}
                              White{" "}
                            </span>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>

                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Gray"
                              className="sr-only"
                              aria-labelledby="color-choice-1-label"
                            />
                            <span id="color-choice-1-label" className="sr-only">
                              {" "}
                              Gray{" "}
                            </span>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>

                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Black"
                              className="sr-only"
                              aria-labelledby="color-choice-2-label"
                            />
                            <span id="color-choice-2-label" className="sr-only">
                              {" "}
                              Black{" "}
                            </span>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <div className="stock mt-9">Brand: {product.brand}</div>

                    <div className="stock mt-9">
                      {product.countInStock > 0 ? "In Stock" : "Unavailble"}
                    </div>

                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add to cart
                    </button>
                  </form>
                </div>
              </div>

              <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
