import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import Dropdown from "../components/Dropdown";

export default function Register() {
  const [phone, setPhone] = useState(1);

  const stateTerrSelectText = "--- select ---";

  const handleSubmit = async (event) => {
    event.preventDefault();

    localStorage ? "" : alert("Please upgrade your browser");

    localStorage.clear();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // State or Territory Dropdown

    const stateTerr = document.querySelector("#state_terr button").innerText;

    stateTerr === stateTerrSelectText
      ? state_terr_warning.classList.remove("hidden")
      : state_terr_warning.classList.add("hidden");

    phone.length !== 10
      ? phone_warning.classList.remove("hidden")
      : phone_warning.classList.add("hidden");

    const postcode = event.target.postcode.value;

    postcode.length !== 4
      ? postcode_warning.classList.remove("hidden")
      : postcode_warning.classList.add("hidden");

    if (
      data.username &&
      data.password &&
      phone.length === 10 &&
      postcode.length === 4 &&
      stateTerr !== "--- select ---"
    ) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      await Router.push("/login");
    }
  };

  return (
    <Layout>
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="text-xl text-black text-center">Welcome</div>
          <div className="text-lg text-black text-center mt-4 mb-6">
            Please enter your details below to register
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last_name"
                type="text"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              title="Please enter your email address"
              id="email"
              type="email"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Mobile number
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              title="Please enter a 10 digit mobile number"
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              type="number"
            />
            <p
              id="phone_warning"
              className="hidden text-red-500 text-xs italic mt-4"
            >
              Please enter a 10 digit mobile number.
            </p>
          </div>
          <div className="mt-6">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="street"
              >
                Street
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="suburb"
              >
                Suburb
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="suburb"
                type="text"
              />
            </div>
          </div>
          <div id="state_parent" className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <Dropdown stateTerrSelectText={stateTerrSelectText} />
              <p
                id="state_terr_warning"
                className="hidden text-red-500 mt-2 font-light text-xs"
              >
                Please select a state or territory
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="postcode"
              >
                Postcode
              </label>
              <input
                required
                title="Please enter a 4 digit postcode"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="postcode"
                type="number"
              />
              <p
                id="postcode_warning"
                className="hidden text-red-500 mt-2 font-light text-xs"
              >
                Please enter 4 a digit postcode
              </p>
            </div>
          </div>

          <div className="mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
              <p className="mt-2 font-light text-xs">Minimum 8 characters</p>
            </label>
            <input
              required
              minLength="8"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
              <p className="mt-2 font-light text-xs">Minimum 12 characters</p>
            </label>
            <input
              required
              minLength="12"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Mystery Financial. All rights reserved.
        </p>
      </div>
    </Layout>
  );
}
