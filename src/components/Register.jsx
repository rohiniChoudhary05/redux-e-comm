import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setToogle } from "../feature/ToggleSlice";
import { useState } from "react";

const Register = () => {
 const [registerData, setRegisterData] = useState(
  JSON.parse(localStorage.getItem("reg user")) || []
);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
     let arr = [...registerData, data]
      setRegisterData(arr)
     localStorage.setItem("reg user", JSON.stringify(arr))
     reset()
    // setToogle(true )
  };

  return (
    <div className="bg-neutral-200 px-10 py-10 rounded-2xl w-100">
      <h1 className="text-center pb-6 text-3xl font-bold">Register</h1>

      <form className="flex flex-col" onSubmit={handleSubmit(formSubmit)}>
        <input
          className="border mb-4 py-2 px-3 rounded"
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          className="border mb-4 py-2 px-3 rounded"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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
          Register
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="pt-5">
          Already have an account?{" "}
          <button
            className="text-blue-700 text-lg font-medium"
            onClick={() => dispatch(setToogle(true))}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
