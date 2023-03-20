"use client";
import NavLink, { NavLinkPropsType } from "./nav-link";
import Image, { StaticImageData } from "next/image";
import headshot from "/public/assets/Headshot-2017.png";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ReactNode, useCallback, useState } from "react";

function HomeNavLink({
  id,
  isOnHomeRoute,
  navLinkProps,
}: {
  id: string;
  isOnHomeRoute: boolean;
  navLinkProps: NavLinkPropsType;
}) {
  return (
    <NavLink
      className={classNames(
        { "-translate-y-1 opacity-0": isOnHomeRoute },
        "transition duration-500"
      )}
      {...navLinkProps}
      href="/"
      key={id}
    />
  );
}

export default function AppBar() {
  const pathname = usePathname();
  const isOnHomeRoute = pathname === "/";
  const [hoveredLinkRoute, setHoveredLinkRoute] = useState("none");

  const navItemsWithoutHome = [
    { href: "/about", displayName: "About" },
    { href: "/work", displayName: "Work" },
    { href: "/contact", displayName: "Contact" },
  ];

  const handleItemHover = useCallback((href: string, isHovered: boolean) => {
    if (isHovered) setHoveredLinkRoute(href);
    else setHoveredLinkRoute("none");
  }, []);

  return (
    <nav className="not-prose grid w-screen grid-flow-col items-center justify-between justify-items-center py-3 px-8">
      <HomeNavLink
        id="Avatar"
        isOnHomeRoute={isOnHomeRoute}
        navLinkProps={{
          isOtherNavLinkHovered: false,
          onHover: (href: string, isHovered: boolean) => {},
          href: "/",
          shouldUseHoverEffect: false,
          children: (
            <Image
              className="rounded-full"
              src={headshot}
              alt="Jason K. Frank"
              width={32}
              height={32}
              priority
            />
          ),
        }}
      />

      <span className="ml-5 grid grid-flow-col gap-6">
        <HomeNavLink
          id="Home"
          isOnHomeRoute={isOnHomeRoute}
          navLinkProps={{
            children: "Home",
            href: "/",
            isOtherNavLinkHovered:
              hoveredLinkRoute !== "none" && hoveredLinkRoute !== "/",
            onHover: handleItemHover,
          }}
        />

        {navItemsWithoutHome.map((item) => (
          <NavLink
            href={item.href}
            key={item.displayName}
            isOtherNavLinkHovered={
              hoveredLinkRoute !== "none" && hoveredLinkRoute !== item.href
            }
            onHover={handleItemHover}
          >
            {item.displayName}
          </NavLink>
        ))}
      </span>
    </nav>
  );
}
