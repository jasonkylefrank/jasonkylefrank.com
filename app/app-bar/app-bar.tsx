"use client";
import NavLink from "./nav-link";
import Image, { StaticImageData } from "next/image";
import headshot from "/public/assets/Headshot-2017.png";
import { useSelectedLayoutSegment } from "next/navigation";
import classNames from "classnames";

function AppBar() {
  const currentURLSegment = useSelectedLayoutSegment();
  const isHome = currentURLSegment == null;

  return (
    <nav className="not-prose grid w-screen grid-flow-col items-center justify-between justify-items-center py-3 px-8">
      <NavLink
        className={classNames({ "opacity-0": isHome })}
        href="/"
        key="Avatar"
      >
        <Image
          className="rounded-full"
          src={headshot}
          alt="Jason K. Frank"
          width={32}
          height={32}
          priority
        />
      </NavLink>

      <span className="grid grid-flow-col gap-6">
        <NavLink
          className={classNames({ "opacity-0": isHome })}
          children="Home"
          href="/"
          key="Home"
        />
        <NavLink children="About" href="/about" key="About" />
      </span>
    </nav>
  );
}

export default AppBar;
