"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "@/app/Context/AuthContext";
import { useParams } from "next/navigation";
import api from "@/utils/api";

const OtpVerification = () => {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const router = useRouter();
  const params = useParams();

  
  const number = decodeURIComponent(params?.number || "");
console.log("Number from params:", number);
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

    const data = {number, otp: enteredOtp };
    console.log("Sending OTP Data:", data);

    try {
      const res = await api.post(
        "/user/otp-verificationLogin",
        data,
       
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      console.log("User data:", res.data.user);
      
      setUser(res.data.user);
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 100)
    } catch (err) {
      console.error(err);
      const errorMsg = err?.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">OTP Verification</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter the 5-digit OTP sent to your registered email or phone.
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
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
