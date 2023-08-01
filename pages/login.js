import Layout from "../components/Layout";
import Router from "next/router";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // Check for localStorage
    localStorage ? "" : alert("Please upgrade your browser");

    const checkFormData = async () => {
      if (
        localStorage.username === data.username &&
        localStorage.password === data.password
      ) {
        await Router.push("/logged-in");
      } else {
        console.log("User and password are incorrect");
      }
    };

    // Check form
    if (data.username && data.password) {
      checkFormData();
    } else {
      console.log("Both user and password are reqd");
    }
  };

  return (
    <Layout>
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="text-xl text-black text-center">
            Welcome to Liberty
          </div>
          <div className="text-lg text-black text-center mt-4 mb-6">
            Please enter your details below to login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Liberty Financial. All rights reserved.
        </p>
      </div>
    </Layout>
  );
}
