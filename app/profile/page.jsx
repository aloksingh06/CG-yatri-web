"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/app/Context/AuthContext";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();


 
  const logout = async () => {
    await api
      .get("/user/logout")
      .then((res) => {
        toast.success(res.data.message);
        setUser(null);
        setIsAuthenticated(false);    
        console.log("log out")   
router.push("/");  // Login page pe le jao

      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.error(err);
      });
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Name:</span>
            <span className="text-gray-900">{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Number:</span>
            <span className="text-gray-900">{user.number}</span>
          </div>

          
          <div className="flex justify-center">
            <button onClick={logout} className="bg-red-400 p-2 rounded-md" >Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
