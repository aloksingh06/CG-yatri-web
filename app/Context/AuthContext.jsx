// context/AuthContext.js
"use client";

import { number } from "framer-motion";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  popUpPage: null,
  setpopUpPage: () => {},
  number: null,
  setnumber: ()=>{},
  name: null,
  setname: () =>{},
  role: null,
  setrole: () => {}

});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [popUpPage, setpopUpPage] = useState(null)
  const [number, setnumber] = useState(null)
  const [name, setname] = useState(null)
  const [role, setrole] = useState(null)

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, popUpPage, setpopUpPage, number, setnumber, name, setname, role, setrole  }}
    >
      {children}
    </AuthContext.Provider>
  );
};