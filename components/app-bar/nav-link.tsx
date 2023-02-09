"use client";

import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function NavLink({
  children,
  href,
  className,
}: {
  children: any;
  href: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isOnHomeRoute = pathname === "/";

  return (
    <Link
      className={classNames(
        className,
        "relative border-none text-sm no-underline hover:bg-transparent",
        {
          "text-gray-900": isActive,
          "text-gray-500": !isActive,
        }
      )}
      href={href}
    >
      {children}
      {isActive && !isOnHomeRoute && (
        <motion.span
          layoutId="activeNavLink"
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 block h-0.5 w-full bg-gray-900"
        />
      )}
    </Link>
  );
}

export default NavLink;
