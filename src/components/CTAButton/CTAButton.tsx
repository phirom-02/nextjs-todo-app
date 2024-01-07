"use client";

import { ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const CTAButton = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  const router = useRouter();
  const pathname = usePathname();

  const buttonStyles = `rounded-md bg-orange-400 capitalize shadow-lg hover:bg-orange-500 ${
    pathname === "/todo-app" && "hidden"
  }`;

  const smButtonStyles = `${buttonStyles} py-2 px-4 font-md`;

  const lgButtonStyles = `${buttonStyles} py-4 font-bold px-12 text-lg gap-2 flex items-center`;

  return (
    <button
      className={size === "sm" ? smButtonStyles : lgButtonStyles}
      onClick={() => router.push("/todo-app")}
    >
      <span>go to app</span>
      <>{size === "lg" && <ArrowRight />}</>
    </button>
  );
};

export default CTAButton;
