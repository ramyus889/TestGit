"use client";
import { useState } from "react";

export const useCompare = () => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 360));

  return {
    random,
    compare: true,
  };
};
