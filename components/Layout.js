import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ title, children }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? title + " | Watchman" : "Watchman"}</title>
        <meta name="description" content="Ecommrece Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="border-b">
          <nav className="container m-auto flex justify-between">
            <h4 className="text-5xl font-bold p-5">Watchman</h4>
            <ul className="nav-menu hidden justify-between sm:flex">
              <li
                onClick={() => {
                  router.push("/");
                }}
                className="text-lg font-bold p-5"
              >
                Home
              </li>
              <li
                onClick={() => {
                  router.push("/products");
                }}
                className="text-lg font-bold p-5"
              >
                Products
              </li>
              <li
                onClick={() => {
                  router.push("/cart");
                }}
                className="text-lg font-bold p-5"
              >
                Cart
              </li>
              <li
                onClick={() => {
                  router.push("/login");
                }}
                className="text-lg font-bold p-5 "
              >
                Login
              </li>
            </ul>
            {show && (
              <ul className="nav-menu absolute bg-white text-black top-0 left-0 w-full mt-20 sm:hidden block">
                <li
                  onClick={() => {
                    router.push("/");
                  }}
                  className="text-lg font-bold p-5"
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="text-lg font-bold p-5"
                >
                  Products
                </li>
                <li
                  onClick={() => {
                    router.push("/cart");
                  }}
                  className="text-lg font-bold p-5"
                >
                  Cart
                </li>
                <li
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="text-lg font-bold p-5 "
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
