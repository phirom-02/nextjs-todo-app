"use client";

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { Menu as MenuIcon } from "lucide-react";
import NavLinks from "./NavLinks/NavLinks";
import CTAButton from "../CTAButton/CTAButton";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${
        pathname.startsWith("/todo-app/") && "hidden"
      } p-2 md:p-4 lg:px-20 bg-slate-950 flex gap-10 items-center sticky top-0 z-[1]`}
    >
      <span
        className="z-[2] text-white md:hidden p-2"
        onClick={() => setOpen(() => !open)}
      >
        <MenuIcon />
      </span>
      <Logo />
      <NavLinks open={open} setOpen={setOpen} />
      <span className="z-[2]">
        <CTAButton size="sm" />
      </span>
    </nav>
  );
};

export default NavBar;
