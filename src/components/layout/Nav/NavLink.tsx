"use client";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

import type { AppPathnames } from "@/src/config";
import { Link } from "@/src/navigation";

export default function NavLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(" w-full h-full", isActive && "text-highlight")}
      href={href}
      {...rest}
    />
  );
}
