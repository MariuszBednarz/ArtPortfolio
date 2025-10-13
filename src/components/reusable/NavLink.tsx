"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

import { Link } from "@/navigation";

const NavLink = ({ href, ...rest }: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx("w-full", isActive && "text-highlight")}
      href={href}
      {...rest}
    />
  );
};

export default NavLink;
