"use client";

import { useState } from "react";

export const useFunc = () => {
  const [click, setClick] = useState(false);
  const text = [
    {
      id: 1,
      text: "Frontend",
      tag: "Next.js",
    },
  ];

  const flexName =
    "flex place-content-center gap-3 rounded-2xl border border-slate-500 px-6 py-3";

  const inlineFlexName = "mx-20 mt-20 inline-flex flex-col gap-5";

  return {
    text,
    click,
    flexName,
    inlineFlexName,
    setClick,
  };
};
