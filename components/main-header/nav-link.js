"use client";
import Link from "next/link";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : `${classes.link}`
      }
    >
      {children}{" "}
    </Link>
  );
}
