import Layout from "../components/Layout";
import Router from "next/router";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    localStorage ? "" : alert("Please upgrade your browser");

    const checkFormData = async () => {
      if (
        localStorage.username === data.username &&
        localStorage.password === data.password
      ) {
        await Router.push("/logged-in");
      } else {
        password_warning.classList.remove("hidden");

        password_warning.innerText =
          "Please ensure your username and password are correct.";
      }
    };

    !data.username ? username_warning.classList.remove("hidden") : "";
    !data.password ? password_warning.classList.remove("hidden") : "";

    // Check form
    if (data.username && data.password) {
      checkFormData();
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
            <p
              id="username_warning"
              className="hidden text-red-500 text-xs italic mt-3"
            >
              Please enter your username.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
            <p
              id="password_warning"
              className="hidden text-red-500 text-xs italic"
            >
              Please enter your password.
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
              onClick={() =>
                alert("-- Redirect user to password reset form --")
              }
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Mystery Financial. All rights reserved.
        </p>
      </div>
    </Layout>
  );
}
