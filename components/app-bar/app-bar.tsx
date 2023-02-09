"use client";
import NavLink from "./nav-link";
import Image, { StaticImageData } from "next/image";
import headshot from "/public/assets/Headshot-2017.png";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ReactNode } from "react";

function HomeNavLink({
  children,
  key,
  isOnHomeRoute,
}: {
  children: React.ReactNode;
  key: string;
  isOnHomeRoute: boolean;
}) {
  return (
    <NavLink
      className={classNames(
        { "-translate-y-1 opacity-0": isOnHomeRoute },
        "transition duration-500"
      )}
      href="/"
      key={key}
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
      <HomeNavLink key="Avatar" isOnHomeRoute={isOnHomeRoute}>
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
        <HomeNavLink children="Home" key="Home" isOnHomeRoute={isOnHomeRoute} />
        <NavLink children="About" href="/about" key="About" />
        <NavLink children="Work" href="/work" key="Work" />
        <NavLink children="Contact" href="/contact" key="Contact" />
      </span>
    </nav>
  );
}
