import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../images/logo.png"; // apna logo path set karo
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import api from "@/utils/api";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const { setpopUpPage, setnumber } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setnumber(`+91${data.number}`)
    setLoading(true);
    const payload = {
      number: `+91${data.number}`,
      verificationMethod: "sms", // by default
      
    };
    console.log(payload)

    try {
        const res = await api.post("/user/forgetPassword", payload);
        toast.success("OTP sent succecfully");
        setpopUpPage("verifyforgetPassword"); // aage ka step handle karo
      } 
    catch (err) {
      console.error(err);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
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
          className="mb-4 relative z-10"
        />

        <h2 className="text-2xl pt-10 font-bold text-center text-gray-800">Reset your MPIN</h2>

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

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </motion.button>

        {/* Back to Sign In */}
        <div className="flex">
          <h1>Remember your MPIN?</h1>
          <h1
            onClick={() => setpopUpPage("login")}
            className="text-blue-800 pl-1 cursor-pointer"
          >
            Sign In
          </h1>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.form>
    </div>
  );
};

export default ForgetPassword;
