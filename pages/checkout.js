import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Layout from "../components/Layout";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Checkout() {
  const [value, setValue] = useState();
  const [cvalue, setcValue] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setcValue(value);
  };

  return (
    <Layout title="Checkout">
      <div className="container m-auto p-10 border rounded-lg mt-40 bg-gray-50">
        <h1 className="mb-10 text-4xl text-center ">Checkout</h1>
        <div className="grid md:grid-cols-4 md:gap-5 ">
          <div className="overflow-x-auto md:col-span-2">
            <h4 className="text-2xl">Contact Information</h4>
            <div className="pt-5 pb-10 border-b">
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-1  border rounded-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="pt-10 pb-10 border-b">
              <h4 className="text-2xl pb-5">Shipping Information</h4>

              <div className="grid md:grid-cols-4 md:gap-5 ">
                <div className="md:col-span-2">
                  <label
                    for="fname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    for="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label
                  for="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="relative mt-1  border rounded-md">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  for="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="relative mt-1  border rounded-md">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  for="apartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, Suit, etc
                </label>
                <div className="relative mt-1  border rounded-md">
                  <input
                    type="text"
                    name="apartment"
                    id="apartment"
                    className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-4 md:gap-5 mt-5">
                <div className="md:col-span-2">
                  <label
                    for="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    for="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                      name="country"
                      id="selectCountry"
                    />
                    {/* <input
                      type="text"
                      name="country"
                      id="country"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    /> */}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-4 md:gap-5 mt-5">
                <div className="md:col-span-2">
                  <label
                    for="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    for="pcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal Code
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="pcode"
                      id="pcode"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label
                  for="pnumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="relative mt-1  border rounded-md">
                  <PhoneInput
                    type="text"
                    name="pnumber"
                    id="pnumber"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            </div>
            <div className="pt-10 pb-10 border-b">
              <h4 className="text-2xl pb-5">Payment</h4>

              <div className="mt-5">
                <label
                  for="CardNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <div className="relative mt-1  border rounded-md">
                  <input
                    type="text"
                    name="CardNo"
                    id="CardNo"
                    maxlength="14"
                    className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-6 md:gap-5 mt-5">
                <div className="md:col-span-2">
                  <label
                    for="nameOnCard"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on Card
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="nameOnCard"
                      id="nameOnCard"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    for="Date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration Date
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="Date"
                      id="Date"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    for="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="relative mt-1  border rounded-md">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      maxlength="3"
                      className="block w-full rounded-md border-gray-300 pl-7 py-4 pr-12 focus-visible:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto md:col-span-2">2</div>
        </div>
      </div>
    </Layout>
  );
}
