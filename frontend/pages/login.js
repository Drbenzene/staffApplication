import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Loader } from "../components/Loader/Loader";
import { SuccessAlert, ErrorAlert } from "../components/Alert/Alerts";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, clearMessages } from "../redux/reducers/userReducers";
import { useRouter } from "next/router";
import Addmodal from "../components/Modal/AddModal";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Clear Message After 3 seconds
  useEffect(() => {

    if(isLoggedIn) {
      router.push("/dashboard/home");
    }


    setTimeout(() => {
      dispatch(clearMessages());
    }, 3000);
  }, []);

  //Use Selector to get the user this

  const { loading, error, success, isLoggedIn, isRegistered } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(formData));
  };

  if (isLoggedIn) {
    setTimeout(() => {
      router.push("/dashboard/home");
    }, 2000);
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your staff account
          </h2>
          <Link href="/register">
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="#"
                className=" pl-2 font-medium text-indigo-600 hover:text-indigo-500"
              >
                create a new account
              </a>
            </p>
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message="Logged In Sucessfully" />}
            {/* //Checking if User Just Registered */}
            {isRegistered && (
              <SuccessAlert message="Your account Was Created Successfully. Please Check Your Inbox to verify your email address." />
            )}
            <form
              onSubmit={loginHandler}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={changeHandler}
                    value={formData.password}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
