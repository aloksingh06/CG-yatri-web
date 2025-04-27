// app/providers.js
"use client";

import { AuthProvider } from "@/app/Context/AuthContext";

export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
