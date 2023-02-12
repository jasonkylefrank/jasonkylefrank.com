"use client";
import NavLink from "./nav-link";
import Image, { StaticImageData } from "next/image";
import headshot from "/public/assets/Headshot-2017.png";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ReactNode } from "react";

function HomeNavLink({
  children,
  id,
  isOnHomeRoute,
}: {
  children: React.ReactNode;
  id: string;
  isOnHomeRoute: boolean;
}) {
  return (
    <NavLink
      className={classNames(
        { "-translate-y-1 opacity-0": isOnHomeRoute },
        "transition duration-500"
      )}
      href="/"
      key={id}
    >
      {children}
    </NavLink>
  );
}

export default function AppBar() {
  const pathname = usePathname();
  const isOnHomeRoute = pathname === "/";

  return (
    <nav className="not-prose grid w-screen grid-flow-col items-center justify-between justify-items-center py-3 px-8">
      <HomeNavLink id="Avatar" isOnHomeRoute={isOnHomeRoute}>
        <Image
          className="rounded-full"
          src={headshot}
          alt="Jason K. Frank"
          width={32}
          height={32}
          priority
        />
      </HomeNavLink>

      <span className="ml-5 grid grid-flow-col gap-6">
        <HomeNavLink id="Home" isOnHomeRoute={isOnHomeRoute}>
          Home
        </HomeNavLink>
        <NavLink href="/about" key="About">
          About
        </NavLink>
        <NavLink href="/work" key="Work">
          Work
        </NavLink>
        <NavLink href="/contact" key="Contact">
          Contact
        </NavLink>
      </span>
    </nav>
  );
}
