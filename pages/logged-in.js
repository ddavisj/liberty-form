import Layout from "../components/Layout";
import Router from "next/router";

export default function LoggedIn() {
  return (
    <Layout>
      <div className="w-full max-w-md">
        <div className="text-xl text-black text-center">Welcome to Liberty</div>
        <div className="text-lg text-black text-center mt-4 mb-6">
          Congrats. You are now logged in!
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Liberty Financial. All rights reserved.
        </p>
      </div>
    </Layout>
  );
}
