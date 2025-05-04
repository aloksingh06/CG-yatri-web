import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo-png.png"; // Replace with your logo path
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import api from "@/utils/api";

export default function ResetPassword() {

 const { setpopUpPage, number, setnumber} = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setconfirmShowPassword] = useState(false)

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
     
      toast.success("Passwords do not match");
      return;
    }

    const payload = {
      number: number,
      newPassword: data.newPassword
    };

    try {
        const res = await api.post("/user/resetPassword", payload);
        toast.success(res.data.message);
     
        setpopUpPage("login");
        
       
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Something went wrong");
      }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-zinc-900/50 backdrop-blur-sm">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
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
          className="mb-2 relative z-10"
        />

        <h2 className="text-2xl pt-10 font-bold text-center text-gray-800">Reset MPIN</h2>

        {/* New Password */}
        <div className="w-full">
          <label className="text-gray-700 font-medium">New MPIN</label>
          <div className="flex gap-4 mt-2 items-center ">
            <input
              type={showPassword ? "text" : "password"}
              maxLength="4"
              {...register("newPassword", { required: true })}
              className="flex-1 py-2 px-3 border bg-white border-gray-400 rounded-xl outline-none"
              placeholder="New MPIN"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">New MPIN is required</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-full">
          <label className="text-gray-700 font-medium">Confirm Password</label>
          <div className="flex gap-4 mt-2 items-center">
          <input
              type={confirmShowPassword ? "text" : "password"}
              maxLength="4"
              {...register("confirmPassword", { required: true })}
              className="flex-1 py-2 px-3 border bg-white border-gray-400 rounded-xl outline-none"
              placeholder="Confirm MPIN"
            />
            <span
              onClick={() => setconfirmShowPassword(!confirmShowPassword)}
              className="cursor-pointer text-gray-600"
            >
              {confirmShowPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">Confirm MPIN is required</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Reset Password
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.form>
    </div>
  );
}
