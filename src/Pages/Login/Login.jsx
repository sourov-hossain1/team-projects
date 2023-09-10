import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border-2 border-slate-300 w-2/5 mt-5 mx-auto">
      <h4 className="text-lg pl-3 font-semibold">
        Log In to Your Run The Stack Account{" "}
      </h4>
      <hr />
      <div className="px-5 mx-auto w-96 grid grid-cols-1 gap-1 text-xl text-white py-5">
        <div className="bg-blue-600 p-2 flex pl-4 items-center  rounded-md gap-2">
          <FaFacebook className="w-6 h-6"></FaFacebook>
          <p> Continue with Facebook</p>
        </div>
        <div className="bg-red-400 p-2 flex pl-4 items-center  rounded-md gap-2">
          <FaGoogle className="w-6 h-6"></FaGoogle>
          <p>Continue with Google</p>
        </div>
        <div className="bg-sky-700 p-2 flex pl-4 items-center  rounded-md gap-2">
          <FaLinkedin className="w-6 h-6"></FaLinkedin>
          <p>Continue with Linkedin</p>
        </div>
        <div className="bg-sky-500 p-2 flex pl-4 items-center  rounded-md gap-2">
          <FaTwitter className="w-6 h-6"></FaTwitter>
          <p>Continue with Twitter</p>
        </div>

        {/* Login Form */}
        <form>
          <div className="form-control py-2">
            <input
              type="email"
              name="password"
              placeholder="Enter Your E-Mail"
              className="border-2 p-1 w-full "
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border-2 p-1 w-full"
            />
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="w-[100%] bg-red-500 p-2 rounded-md "
            >
              Login
            </button>
          </div>
        </form>

        <div>
          <p className="text-sky-400 text-center text-xs py-3">
            Forgot Password
          </p>
          <hr className="h-1" />
          <p className="text-black text-sm pt-2 text-center">
            Do not have an account?{" "}
            <Link className="text-sky-400">Registration</Link>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
