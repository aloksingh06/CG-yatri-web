"use client";

import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { AuthContext } from "@/app/Context/AuthContext";
import { IoCloseSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/app/images/logo-png.png";

const Login = () => {
  const { setUser, setpopUpPage, setnumber, setIsAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const mpinRef = [useRef(), useRef(), useRef(), useRef()];
  const [showMpin, setShowMpin] = useState(false);

  const handleMpinChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // only digits

    if (value.length > 1) {
      const trimmed = value.slice(-1);
      setValue(`mpin${index}`, trimmed);
      if (index < 3) mpinRef[index + 1].current.focus();
      return;
    }

    setValue(`mpin${index}`, value);

    if (value && index < 3) {
      mpinRef[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !getValues(`mpin${index}`) && index > 0) {
      mpinRef[index - 1].current.focus();
    }
  };

  const handleRegister = async (data) => {
    const password = `${data.mpin0}${data.mpin1}${data.mpin2}${data.mpin3}`;

    const payload = {
      number: `+91${data.number}`,
      password,
      verificationMethod: "sms",
    };

    console.log("Register payload:", payload);

    try {
      const res = await api.post("/user/login", payload);
      toast.success(res.data.message);
      setUser(res.data.user);
      setpopUpPage(null);
      setIsAuthenticated(true);
      setnumber(payload.number);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-zinc-900/50 backdrop-blur-sm">

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(handleRegister)}
        className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-3 w-full max-w-sm space-y-6 flex flex-col items-center overflow-hidden"
      >
        {/* SVG Wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
            <path d="M-0.84,77.75 C150.00,150.00 349.88,0.00 500.00,100.00 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "rgb(0, 100, 241)", opacity: 0.4 }} />
          </svg>
        </div>

        {/* Close Button */}
        <div
          onClick={() => setpopUpPage(null)}
          className="absolute right-4 top-4 p-1 text-gray-600 cursor-pointer hover:text-gray-800 z-20"
        >
          <IoCloseSharp size={24} />
        </div>

        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={65}
          height={65}
          className="mb-4 relative z-10"
        />

        <h2 className="text-2xl pt-10 font-bold text-center text-gray-800">Sign in to your account</h2>

        {/* Phone Input */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white w-full">
          <span className="px-4 bg-gray-200 text-gray-600">+91</span>
          <input
            type="number"
            placeholder="Phone number"
            {...register("number", { required: true })}
            className="flex-1 py-2 px-3 outline-none bg-transparent"
          />
        </div>
        {errors.number && (
          <p className="text-red-500 text-sm">Phone number is required</p>
        )}

        {/* MPIN Input */}
        <div className="w-full">
          <label className="text-gray-700 font-medium">Enter 4-digit MPIN</label>
          <div className="flex gap-4 mt-2 items-center px-6">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type={showMpin ? "text" : "password"}
                maxLength={1}
                {...register(`mpin${index}`, { required: true })}
                onChange={(e) => handleMpinChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={mpinRef[index]}
                className="w-12 h-12 text-center text-xl border bg-white border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            ))}
            <span
              onClick={() => setShowMpin(!showMpin)}
              className="cursor-pointer text-gray-600"
            >
              {showMpin ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
            
          </div>
          <h1
            onClick={() => setpopUpPage("forgetPassword")}
            className="text-blue-800 pl-1 cursor-pointer mt-1 text-sm"
          >
            Forget Password
          </h1>
          {(errors.mpin0 || errors.mpin1 || errors.mpin2 || errors.mpin3) && (
            <p className="text-red-500 text-sm mt-1">All 4 digits are required</p>
          )}
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Submit
        </motion.button>

        {/* Switch to Sign Up */}
    
          <div className="flex">
          <h1>New Here?</h1>
          <h1
            onClick={() => setpopUpPage("register")}
            className="text-blue-800 pl-1 cursor-pointer"
          >
            Sign Up
          </h1>
          </div>
        
         
        
        

        {/* Dots */}
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
