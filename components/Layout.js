import Head from "next/head";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

export default function Layout({ title, children }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " | Watchman" : "Watchman"}</title>
        <meta name="description" content="Ecommrece Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="border-b fixed w-full bg-white z-40">
          <nav className="container m-auto flex justify-between">
            <h4 className="text-4xl  font-bold p-5 cursor-pointer">
              <Link href="/">Watchman</Link>
            </h4>

            <ul className="nav-menu hidden justify-between mt-3 cursor-pointer sm:flex">
              <li
                onClick={() => {
                  router.push("/");
                }}
                className="text-lg  p-5"
              >
                Home
              </li>
              <li
                onClick={() => {
                  router.push("/products");
                }}
                className="text-lg  p-5"
              >
                Products
              </li>
              <li
                onClick={() => {
                  router.push("/login");
                }}
                className="text-lg  p-5 "
              >
                Login
              </li>
              <li
                onClick={() => {
                  router.push("/cart");
                }}
                className="text-lg  p-5 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </li>
            </ul>
            {show && (
              <ul className="nav-menu absolute bg-white text-black top-0 left-0 w-full mt-20 sm:hidden block">
                <li
                  onClick={() => {
                    router.push("/");
                  }}
                  className="text-lg p-5"
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="text-lg p-5"
                >
                  Products
                </li>
                <li
                  onClick={() => {
                    router.push("/cart");
                  }}
                  className="text-lg p-5"
                >
                  Cart
                </li>
                <li
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="text-lg p-5 "
                >
                  Login
                </li>
              </ul>
            )}
            <div className="humberger sm:hidden flex flex-col justify-center items-center pr-5">
              <svg
                onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </header>
        <main className="">{children}</main>
        <footer className="border-t h-20 bg-black flex items-center justify-center">
          <p className="text-2xl font-medium text-white">
            Copyright @ 2023 Watchman
          </p>
        </footer>
      </div>
    </>
  );
}
