import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import Login from "../auth/Login";
import OtpVerification from "../auth/OtpVerification";
import RegisterOtp from "../auth/RegisterOtp";
import UserDetail from "../auth/UserDetail";
import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";
import VerifyForgotPassword from "../auth/VerifyForgetPassword";
import ResetPassword from "../auth/ResetPassword";

const Modal = () => {
  const { popUpPage } = useContext(AuthContext);

  return (
    <div>
      {popUpPage === "login" ? (
        <Login />
      ) : popUpPage === "register" ? (
        <Register />
      ) : popUpPage === "otp" ? (
        <OtpVerification />
      ) : popUpPage === "registerOtp" ? (
        <RegisterOtp />
      ): popUpPage === "userDetail" ? (
        <UserDetail />

      ) : popUpPage === "forgetPassword" ? (
        <ForgetPassword />
      ) : popUpPage === "verifyforgetPassword" ? (
        <VerifyForgotPassword />
      ) : popUpPage === "resetPassword" ? (
        <ResetPassword />
      ) :
      
      <div>not found</div>
    }
    </div>

  );
};

export default Modal;
