import { createNavigation } from "next-intl/navigation";
import { routing } from "./config";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
