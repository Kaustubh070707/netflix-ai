import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg 959w"
          alt="logo"
          aria-hidden="true"
        ></img>
      </div>
      <form className=" w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full">Sign In</button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix ? " : "Already a User ? "}
          <button onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
