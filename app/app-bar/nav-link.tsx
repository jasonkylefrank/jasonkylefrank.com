"use client";

import classNames from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function NavLink({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) {
  // Need the nullish coalescing here b/c useSelectedLayoutSegment() returns null if the user is at the root of this layout-level.
  const currentURLSegment = useSelectedLayoutSegment() ?? "";

  const isActive = `/${currentURLSegment}` === href;

  // TODO: set the base gray to a neutral gray in Tailwind
  return (
    <Link
      className={classNames(className, "border-none text-sm", {
        "text-gray-900 underline decoration-gray-900 decoration-2 underline-offset-4":
          isActive,
        "text-gray-600 no-underline": !isActive,
      })}
      href={href}
    >
      {text}
    </Link>
  );
}

export default NavLink;
