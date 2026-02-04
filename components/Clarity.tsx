"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export const Clarity = () => {
  useEffect(() => {
    // Replace with your actual Clarity Project ID
    clarity.init("vbxyut5ry8");
  }, []);

  return null;
};


