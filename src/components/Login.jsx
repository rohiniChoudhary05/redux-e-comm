import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setToogle } from "../feature/ToggleSlice";
// import { useNavigate } from "react-router";
import { setUser } from "../feature/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  //  let  navigate =useNavigate()
 let LSD = JSON.parse(localStorage.getItem("reg user")) || [];

    console.log(LSD);
    

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const formSubmit = (data) => {
  reset();

  let user = LSD.find(
    (val) => val.email === data.email && val.password === data.password
  );

  if (user) {
    localStorage.setItem("log user", JSON.stringify(user));
    dispatch(setUser(user));
    alert("Login Successful");
  } else {
    alert("Invalid email or password");
  }
};


  return (
    <div className="bg-neutral-200 px-10 py-10 rounded-2xl w-100">
      <h1 className="text-center pb-6 text-3xl font-bold">Login</h1>

      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col">
        <input
          className="border mb-4 py-2 px-3 rounded"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <input
          className="border mb-4 py-2 px-3 rounded"
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button
          className="bg-black text-white py-2 rounded text-xl mt-3"
          type="submit"
        >
          Login
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="pt-5">
          Don't have an account?{" "}
          <button
            className="text-green-500 text-lg font-medium"
            onClick={() => dispatch(setToogle(false))}
          >
            Create One
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
