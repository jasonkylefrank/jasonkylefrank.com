import Image from "next/image";
import cn from "classnames";
import headshot from "/public/assets/Headshot-2017.png";

export default function Avatar({
  size = 144,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      className={cn("rounded-full shadow-lg shadow-black/10", className)}
      src={headshot}
      alt="Jason K. Frank"
      placeholder="blur"
      width={size}
      height={size}
      priority
    />
  );
}
