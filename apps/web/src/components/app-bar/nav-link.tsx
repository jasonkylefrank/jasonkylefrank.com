"use client";

import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type NavLinkPropsType = {
  children: any;
  href: string;
  className?: string;
  isOtherNavLinkHovered: boolean;
  onHover: (href: string, isHovered: boolean) => void;
  shouldUseHoverEffect?: boolean;
};

function NavLink({
  children,
  href,
  className,
  // This is needed so we can know when to remove the hover element from the DOM so that Framer Motion's layoutId animation can work
  isOtherNavLinkHovered,
  onHover,
  shouldUseHoverEffect = true,
}: NavLinkPropsType) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isOnHomeRoute = pathname === "/";
  const [isHovered, setIsHovered] = useState(false);
  const hoveredNavLinkLayoutId = "hoveredItem"; // For Framer Motion's layout ID

  useEffect(() => {
    onHover && onHover(href, isHovered);
  }, [isHovered, onHover, href]);

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      {/* --- Hover effect elements --- *}
  
      {/* This one establishes a "base location" for the hover effect so that the visual indicator moves from 
          the currently-selected NavLink to the hovered item.
          This element will get removed from the DOM when a different NavItem is hovered on, allowing Framer Motion's shared-layout 
          animation to animate the effect from the currently-selected NavLink to the hovered NavLink */}
      {shouldUseHoverEffect &&
        isActive &&
        !isOtherNavLinkHovered &&
        !isOnHomeRoute && (
          <motion.span
            layoutId={hoveredNavLinkLayoutId}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 block h-0.5 w-full bg-gray-900/25 opacity-0"
          />
        )}
      {/* This element becomes the "distination location" for the hover visual indicator. */}
      {shouldUseHoverEffect && isHovered && !isActive && (
        <motion.span
          layoutId={hoveredNavLinkLayoutId}
          transition={{ duration: 0.25 }}
          className="absolute top-full left-0 block h-0.5 w-full bg-gray-900/25"
        />
      )}
    </Link>
  );
}

export default NavLink;
