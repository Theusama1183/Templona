import React, { useContext } from "react";
import Link from "next/link";
import { Store } from "../utils/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      toast.error("Oops! We have no more In stock", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <div className="card hover:shadow border ">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow w-full m-auto bg-gray-100 p-20"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
        </Link>
        <div className="flex mt-2">
          <p className="m-1 line-through text-gray-600 text-lg font-semibold">
            ${product.price}
          </p>
          <p className="m-1 text-black text-lg font-semibold">
            ${product.salePrice}
          </p>
        </div>
        <button
          className="bg-black text-white primary-button px-10 py-3 mt-5"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
