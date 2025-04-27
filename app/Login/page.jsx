"use client";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { AuthContext } from "@/app/Context/AuthContext";

const Login = () => {
  const { isAuthenticated, setUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
   
    data.number = `+91${data.number}`;
    data.verificationMethod = "sms";
    console.log("Register data being sent:", data);
    try {
      const res = await api.post("/user/login", data);
      toast.success(res.data.message);
      setUser(res.data.user);
      console.log("User data:", res.data);
      router.push(`/otp-verificationLogin/${data.number}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <span className="px-3 bg-gray-200 text-gray-600">+91</span>
          <input
            type="number"
            placeholder="Phone number"
            {...register("number", { required: true })}
            className="flex-1 p-2 outline-none"
          />
        </div>
        {errors.number && (
          <p className="text-red-500 text-sm">Phone number is required</p>
        )}

        <div>
          <p className="mb-1 font-medium">Select Verification Method:</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="sms"
                {...register("verificationMethod", { required: true })}
              />
              Email
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="call"
                {...register("verificationMethod", { required: true })}
              />
              Phone
            </label>
          </div>
          {errors.verificationMethod && (
            <p className="text-red-500 text-sm">Choose a method</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
