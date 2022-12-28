import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Layout({ title, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + " | Templona" : "Templona"}</title>
        <meta name="description" content="Ecommrece Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="border-b">
          <nav className="container m-auto flex justify-between">
            <h4 className="text-5xl font-bold p-5">Watchman</h4>
            <ul className="nav-menu flex justify-between">
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
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="border-t h-10 flex items-center justify-center">
          <p>Copyright @ 2023 Watchman</p>
        </footer>
      </div>
    </>
  );
}
