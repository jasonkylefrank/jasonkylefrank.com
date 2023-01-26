"use client";

import classNames from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function NavLink({
  children,
  href,
  className,
}: {
  children: any;
  href: string;
  className?: string;
}) {
  // Need the nullish coalescing here b/c useSelectedLayoutSegment() returns null if the user is at the root of this layout-level.
  const currentURLSegment = useSelectedLayoutSegment() ?? "";
  const isActive = `/${currentURLSegment}` === href;

  return (
    <Link
      className={classNames(
        className,
        "border-none text-sm hover:bg-transparent",
        {
          "text-gray-900 underline decoration-gray-900 decoration-2 underline-offset-4":
            isActive,
          "text-gray-600 no-underline": !isActive,
        }
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
