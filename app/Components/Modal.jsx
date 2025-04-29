import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import Login from "./Login";
import OtpVerification from "./OtpVerification";
import RegisterOtp from "./RegisteOtp";
import UserDetail from "./UserDetail";
import Register from "./Register";

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
      ) : <div>n</div>
      }
    </div>
  );
};

export default Modal;
