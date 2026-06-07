import { useState } from "react";

const LoginForm = () => {
  const [isToggleSignUpForm, setIsToggleSignUpForm] = useState(true);

  const handleToggleSignUpForm = () => {
    setIsToggleSignUpForm(!isToggleSignUpForm);
  };
  return (
    <>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <form className="z-10 flex w-full max-w-md flex-col rounded bg-black/75 p-12">
          <h1 className="mb-8 text-3xl font-bold text-white">
            {isToggleSignUpForm ? "Sign Up" : "Sign In"}
          </h1>
          {isToggleSignUpForm && (
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className="mb-4 rounded bg-gray-700 p-4 text-white"
            />
          )}
          <input
            id="email"
            type="text"
            placeholder="Email or mobile number"
            className="mb-4 rounded bg-gray-700 p-4 text-white"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="mb-6 rounded bg-gray-700 p-4 text-white"
          />

          <button className="rounded bg-red-600 p-3 font-semibold text-white">
            {isToggleSignUpForm ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="flex justify-center gap-1 w-full py-4 text-white"
            onClick={handleToggleSignUpForm}
          >
            {isToggleSignUpForm ? (
              <>
                <span>Already a customer?</span>{" "}
                <u className="cursor-pointer">Sign In</u>
              </>
            ) : (
              <>
                <span>New to Netflix?</span>{" "}
                <u className="cursor-pointer">Sign Up</u> Now
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
