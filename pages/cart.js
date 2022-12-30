import React, { useContext } from "react";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const tax = cartItems.reduce(
    (a, c) => a + (c.quantity * c.price * 2.5) / 100,
    0
  );
  return (
    <Layout title="Cart">
      <div className="container m-auto px-4 mt-40">
        <h1 className="mb-4 text-4xl ">Shoping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <Link href="/">Go Shoping</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 md:gap-5 ">
            <div className="overflow-x-auto md:col-span-3">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="px-5 text-right">Quantity</th>
                    <th className="px-5 text-right">Price</th>
                    <th className="px-5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug} className="border-b border-t h-44">
                      <td>
                        <Link href={`/product/${item.slug}`}>
                          <div className="flex items-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                            ></Image>
                            <p className="ml-5">{item.name}</p>
                          </div>
                        </Link>
                      </td>
                      <td className="p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-center">
                        <button onClick={() => removeItemHandler(item)}>
                          <svg
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="priceCard md:col-span-2 p-7 rounded-lg">
              <h4 className="text-2xl font-semibold">Order Summary</h4>
              <div className="subtotal flex border-b py-4 justify-between">
                <p>Subtotal</p>
                <p>
                  ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </p>
              </div>
              <div className="Shipping flex border-b py-4 justify-between">
                <p>Shipping estimate</p>
                <p>$10</p>
              </div>
              <div className="tax flex border-b py-4 justify-between">
                <p>Tax estimate</p>
                <p>
                  $
                  {cartItems.reduce(
                    (a, c) => a + (c.quantity * c.price * 2.5) / 100,
                    0
                  )}
                </p>
              </div>
              <div className="tax flex py-4 justify-between">
                <p className="text-xl font-semibold">Order Total</p>
                <p className="text-xl font-semibold">
                  $
                  {cartItems.reduce(
                    (a, c) => a + c.quantity * c.price + 10 + tax,
                    0
                  )}
                </p>
              </div>
              <div className="checkoutBtn">
                <button
                  onClick={() => router.push("/checkout")}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
