"use client";

import { navLinks } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "../ui/Button";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center justify-between pb-28 pt-14">
      <h1 className="logoTitle">Dananz</h1>
      <nav className="flex items-center gap-[75px]">
        {navLinks.map((link) => (
          <Link
            key={link.route}
            href={link.route}
            className={clsx("font-normal text-text-primary transition-colors", {
              "font-semibold": pathname === link.route,
              "hover:text-stone-600": pathname !== link.route,
            })}
          >
            {link.title}
          </Link>
        ))}
        <Link href="/contacts">
          <Button variant="blue">Contacts</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
