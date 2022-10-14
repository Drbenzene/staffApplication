import Link from "next/link";
import { useState, useEffect } from "react";
import { userRegister } from "../redux/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader";
import { SuccessAlert, ErrorAlert } from "../components/Alert/Alerts";
import { useRouter } from 'next/router'


export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter()

  //Picking from the UseSelector
  const { loading, error, success } = useSelector((state) => state.user);


  const [showAlert, setShowAlert] = useState(false);

  const [userInfo, setUserInfo] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    },
  ]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userInfo);

    await dispatch(userRegister(userInfo));
  };

  if(success) {
    setTimeout(() => {
      router.push('/login')
    }, 2000)
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
            Create A Staff Account
          </h2>
          <Link href="/login">
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="#"
                className="font-medium mx-2 text-indigo-600 hover:text-indigo-500"
              >
                Login to your existing account
              </a>
            </p>
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {success && (
              <div className="my-2">
                <SuccessAlert message="Staff Account Created Successfully." />
              </div>
            )}

            {error && (
              <div className="my-2">
                <ErrorAlert message={error} />
              </div>
            )}
            <form
              onSubmit={submitHandler}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  FirstName
                </label>
                <div className="mt-1">
                  <input
                    onChange={changeHandler}
                    value={userInfo.firstName}
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={changeHandler}
                    value={userInfo.lastName}
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    onChange={changeHandler}
                    value={userInfo.phone}
                    name="phone"
                    type="number"
                    autoComplete="phoneNumber"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={changeHandler}
                    value={userInfo.email}
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
                    value={userInfo.password}
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
                {loading === true ? (
                  <Loader mesage="Please wait white we setup your staff account" />
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
