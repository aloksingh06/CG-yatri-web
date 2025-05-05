"use client";

import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import logo from "@/app/images/logo-png.png";

const UserDetail = () => {

    const { number, name, role, setpopUpPage } = useContext(AuthContext)

    const router = useRouter();
    const params = useParams();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    console.log("Number from params:", number, name, role);

    // Handle the form submission
    const handleRegister = async (data) => {
        console.log(data)
        try {
            let apiUrl = "";
            // Dynamically set API endpoint based on role
            if (role === "user") {
                apiUrl = "/detail/registerUser";
            } else if (role === "service_provider") {
                apiUrl = "/detail/serviceProvider";
            } else if (role === "driver") {
                apiUrl = "/detail/driver";
            }

            // Post data to the appropriate API
            const res = await api.post(apiUrl, data);
            console.log(apiUrl)
            toast.success(res.data.message);
            setpopUpPage(null); // Redirect to dashboard or home
        } catch (error) {
            toast.error("Registration failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-zinc-900/50 backdrop-blur-sm">
             <div className="absolute top-0 left-0 w-full">
                      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-40">
                        <path d="M-0.84,77.75 C150.00,150.00 349.88,0.00 500.00,100.00 L500.00,0.00 L0.00,0.00 Z"
                          style={{ stroke: "none", fill: "rgb(0, 100, 241)", opacity: 0.4 }} />
                      </svg>
                    </div>
                    
                            {/* Close Button */}
                           
                    
                            {/* Logo */}
                            <Image
                              src={logo}
                              alt="Logo"
                              width={65}
                              height={65}
                              className="mb-10 relative z-10"
                            />
            <form onSubmit={handleSubmit((data) => {
                data.name = name;
                data.number = number;
                data.role = role;
                handleRegister(data);
            })} className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">



                <h2 className="text-2xl font-bold text-center">Register as {role}</h2>

                {/* Dynamic form fields based on role */}
                {role === "user" && (
                    <>
                        <input
                            type="text"
                            placeholder="City"
                            {...register("city", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.city && <p className="text-red-500 text-sm">City is required</p>}

                        <input
                            type="text"
                            placeholder="Vehicle Type"
                            {...register("vehicleType", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.vehicleType && <p className="text-red-500 text-sm">Vehicle Type is required</p>}

                        {/* Notify App Launch */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("notifyAppLaunch")}
                                id="notifyAppLaunch"
                            />
                            <label htmlFor="notifyAppLaunch" className="text-sm text-gray-600">
                                Notify me about app launch
                            </label>
                        </div>

                        {/* Beta User */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("betaUser")}
                                id="betaUser"
                            />
                            <label htmlFor="betaUser" className="text-sm text-gray-600">
                                I want to become a beta user
                            </label>
                        </div>
                    </>
                )}

                {role === "driver" && (
                    <>
                        <input
                            type="text"
                            placeholder="Vehicle Type"
                            {...register("vehicleType", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.vehicleType && <p className="text-red-500 text-sm">Vehicle Type is required</p>}

                        {/* Own Vehicle */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("ownVehicle")}
                                id="ownVehicle"
                            />
                            <label htmlFor="ownVehicle" className="text-sm text-gray-600">
                                Do you own a vehicle?
                            </label>
                        </div>

                        {/* Training */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("training")}
                                id="training"
                            />
                            <label htmlFor="training" className="text-sm text-gray-600">
                                Interested in training program?
                            </label>
                        </div>

                        {/* Extra Income */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                {...register("extraIncome")}
                                id="extraIncome"
                            />
                            <label htmlFor="extraIncome" className="text-sm text-gray-600">
                                Interested in extra income options?
                            </label>
                        </div>
                    </>
                )}

                {role === "service_provider" && (
                    <>
                        <input
                            type="text"
                            placeholder="Service Type"
                            {...register("serviceType", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.serviceType && <p className="text-red-500 text-sm">Service Type is required</p>}

                        <input
                            type="text"
                            placeholder="Business Name"
                            {...register("businessName", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.businessName && <p className="text-red-500 text-sm">Business Name is required</p>}

                        <input
                            type="text"
                            placeholder="City"
                            {...register("city", { required: true })}
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        {errors.city && <p className="text-red-500 text-sm">City is required</p>}
                    </>
                )}

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Register
                </button>
            </form>
        </div>
    );
};

export default UserDetail;
