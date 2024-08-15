"use client";

import { Button, extendVariants } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      default: "text-[#000] bg-[#be2c72]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-medium gap-4 rounded-medium",
      xxl: "px-12 min-w-36 h-20 text-large gap-6 rounded-large",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "default",
    size: "xl",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "default",
      class: "bg-[#be2c72]/50 opacity-100",
    },
  ],
});