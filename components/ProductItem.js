import React from "react";
import Link from "next/link";
export default function ProductItem({ product }) {
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
        <Link href={`/product/${product.slug}`}>
          <button
            className="bg-black text-white primary-button px-10 py-3 mt-5"
            type="button"
          >
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
