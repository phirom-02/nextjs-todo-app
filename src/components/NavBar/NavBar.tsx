"use client";

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { Menu as MenuIcon } from "lucide-react";
import NavLinks from "./NavLinks/NavLinks";
import CTAButton from "../CTAButton/CTAButton";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-2 md:p-4 lg:px-40 bg-slate-950 flex gap-10 items-center">
      <span
        className="text-white md:hidden p-2"
        onClick={() => setOpen(() => !open)}
      >
        <MenuIcon />
      </span>
      <Logo />
      <NavLinks open={open} setOpen={setOpen} />
      <CTAButton size="sm" />
    </nav>
  );
};

export default NavBar;
