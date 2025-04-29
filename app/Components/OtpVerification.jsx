"use client";

import { useState, useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext } from "@/app/Context/AuthContext";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import api from "@/utils/api";
import logo from "@/app/images/logo-png.png"


const OtpVerification = () => {
  const { setIsAuthenticated, setUser, number, setpopUpPage } = useContext(AuthContext);
  const router = useRouter();
  const params = useParams();

  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (otp.some((digit) => digit === "")) {
      toast.error("Please enter the full OTP.");
      return;
    }

    const data = { number, otp: enteredOtp };
    console.log("Sending OTP Data:", data);

    try {
      const res = await api.post("/user/otp-verificationLogin", data);
      toast.success(res.data.message);
      setIsAuthenticated(true);
      setUser(res.data.user);
      setpopUpPage(null);
    } catch (err) {
      console.error(err);
      const errorMsg = err?.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
      setIsAuthenticated(false);
      console.log("otp verifcation failed")
      setUser(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900/50 backdrop-blur-sm">
      <motion.form
        onSubmit={handleOtpVerification}
        className="relative bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Close Button */}
        <div
          onClick={() => setpopUpPage(null)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
        >
          <IoCloseSharp size={24} />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          OTP Verification
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 text-center">
          Enter the 5-digit OTP sent to your registered number.
        </p>

        {/* OTP Input */}
        <motion.div
          className="flex justify-between gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </motion.div>

        {/* Verify Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Verify OTP
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default OtpVerification;
