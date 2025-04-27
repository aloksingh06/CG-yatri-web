"use client";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { AuthContext } from "@/app/Context/AuthContext";

const Register = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    data.number = `+91${data.number}`;
    data.verificationMethod = "sms"; // Tum already fix kar chuke ho
    console.log("Register data being sent:", data);

    try {
      const res = await api.post("/user/register", data);
      toast.success(res.data.message);
      router.push(`/otp-verification/${data.number}/${data.name}/${data.role}`);
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
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="w-full border border-gray-300 p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}

        {/* Phone Number */}
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

        {/* City */}
        {/* Vehicle Type Dropdown */}
        <select
          {...register("role", { required: true })}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select Role Type</option>
          <option value="user">user</option>
          <option value="service_provider">service provider</option>
          <option value="driver">driver</option>
    
        </select>
       
        {/* Notify App Launch */}
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("notifyAppLanch")}
            id="notifyAppLanch"
          />
          <label htmlFor="notifyAppLanch" className="text-sm text-gray-600">
            Notify me about app launch
          </label>
        </div> */}

        {/* Beta User */}
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("betaUser")}
            id="betaUser"
          />
          <label htmlFor="betaUser" className="text-sm text-gray-600">
            I want to become a beta user
          </label>
        </div> */}

        {/* Verification Method (already hidden fix SMS) */}
       
        {/* Submit Button */}
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

export default Register;
