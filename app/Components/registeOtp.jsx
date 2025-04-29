"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext } from "@/app/Context/AuthContext";
import { useParams } from "next/navigation";
import api from "@/utils/api";
import { motion } from "framer-motion";

import logo from "@/app/images/logo-png.png"

const RegisterOtp = () => {
  const { setIsAuthenticated, setUser, name, number, role, setpopUpPage, user } = useContext(AuthContext);
  const router = useRouter();
  const params = useParams();

  console.log("Number from params:", number, name, role);
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
      const res = await api.post("/user/otp-verification", data);
      toast.success(res.data.message);
      setIsAuthenticated(true);
      setUser(res.data.user);
      console.log(res.data.user)
      setpopUpPage("userDetail");
    } catch (err) {
      console.error(err);
      const errorMsg = err?.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
      setIsAuthenticated(false);
      setUser(null);
      console.log("otp verfification failed")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
         <div className="absolute top-0 left-0 w-full">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
                    <path d="M-0.84,77.75 C150.00,150.00 349.88,0.00 500.00,100.00 L500.00,0.00 L0.00,0.00 Z" 
                      style={{ stroke: "none", fill: "#3b82f6", opacity: 0.4 }} />
                  </svg>
                </div>
        
                {/* Close Button */}
               
        
                {/* Logo */}
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mb-4 relative z-10"
                />
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">OTP Verification</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter the 5-digit OTP sent to your registered phone number.
        </p>
        <form onSubmit={handleOtpVerification}>
          <div className="flex justify-between gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-full hover:opacity-90 transition"
          >
            Verify OTP
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterOtp;
