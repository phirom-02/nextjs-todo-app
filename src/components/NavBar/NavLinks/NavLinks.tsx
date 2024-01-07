"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];``

const NavLinks = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const defaultLinkContainerStyles =
    "fixed top-14 bg-slate-950 p-4 left-0 h-screen w-9/12 gap-4 z-10";

  const mediumLinkContainerStyles =
    "md:static md:flex-row md:h-auto md:w-auto md:p-0";

  return (
    <div
      className={`${defaultLinkContainerStyles} ${mediumLinkContainerStyles} ${
        !open && "hidden"
      } md:flex`}
    >
      {links.map((link) => (
        <Link
          onClick={() => setOpen(() => !open)}
          className={`text-slate-50 px-4 py-2 rounded-md block ${
            pathname === link.path ? "bg-slate-50 text-slate-800" : ""
          }`}
          key={link.title}
          href={link.path}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
