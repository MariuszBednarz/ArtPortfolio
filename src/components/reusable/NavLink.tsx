"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

import type { pathnames } from "@/config";

import { Link } from "@/navigation";

const NavLink = <Pathname extends keyof typeof pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>): JSX.Element => {
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
