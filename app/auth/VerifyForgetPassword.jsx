import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Image from "next/image";
import logo from "@/app/images/logo.png";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import api from "@/utils/api";

export default function VerifyForgotPassword() {
  const { setpopUpPage, number } = useContext(AuthContext);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
 
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return; // allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.some((digit) => digit === "")) {
      toast.error("Please enter all 6 digits");
      return;
    }

    const finalOtp = otp.join("");
    try {
      const res = await api.post("/user/verify-forgetPassword", {
        number,
        otp: finalOtp,
      });
      toast.success(res.data.message);
      setpopUpPage("resetPassword");
    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-zinc-900/50 backdrop-blur-sm">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-3 w-full max-w-sm space-y-6 flex flex-col items-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
            <path
              d="M-0.84,77.75 C150.00,150.00 349.88,0.00 500.00,100.00 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "rgb(0, 100, 241)", opacity: 0.4 }}
            />
          </svg>
        </div>

        <div
          onClick={() => setpopUpPage(null)}
          className="absolute right-4 top-4 p-1 text-gray-600 cursor-pointer hover:text-gray-800 z-20"
        >
          <IoCloseSharp size={24} />
        </div>

        <Image src={logo} alt="Logo" width={65} height={65} className="mb-2  relative z-10" />
        <h2 className="text-2xl pt-10 font-bold text-center text-gray-800">Enter OTP</h2>

        <div className="w-full">
          <label className="text-gray-700 font-medium">Enter 6-digit OTP</label>
          <div className="flex gap-2 mt-2 items-center px-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type={"text"}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                className="w-11 h-11 text-center text-xl border bg-white border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            ))}
            
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 mb-5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Verify OTP
        </motion.button>
      </motion.form>
    </div>
  );
}
