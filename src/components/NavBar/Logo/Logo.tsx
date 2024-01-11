"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex-1 z-[2]">
      <p
        className="cursor-pointer font-bold md:text-2xl w-fit"
        onClick={() => router.push("/")}
      >
        NEXT.js Todo
      </p>
    </div>
  );
};

export default Logo;
