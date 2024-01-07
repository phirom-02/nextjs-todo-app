import React from "react";
import Logo from "../NavBar/Logo/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-4 lg:px-40 bg-slate-950 flex flex-col sm:flex-row sm:items-center gap-8">
      <Logo />
      <p className="text-slate-400">
        <b>Copyright</b> © 2024 Phirom Khim
      </p>
      <Link className="text-slate-50 font-bold" href="/about">
        About
      </Link>
    </div>
  );
};

export default Footer;
