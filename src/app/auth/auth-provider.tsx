"use client";

import { ReactElement } from "react";
import { AuthContext } from "./auth-context";

interface AuthProviderProps {
  children: ReactElement | ReactElement[];
  value: boolean;
}

export function AuthProvider({ children, value }: AuthProviderProps) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}