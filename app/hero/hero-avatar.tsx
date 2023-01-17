import Image, { StaticImageData } from "next/image";

function HeroAvatar({
  src,
  size = 132,
  /** Useful when you need to render a blank space of the same size as the normal avatar
   *  (for purposes of aligning text-based content from the hero-intro and the hero-statement.)
   */
  isPlaceholder = false,
}: {
  src?: string | StaticImageData;
  size?: number;
  isPlaceholder?: boolean;
}) {
  const placeholderElement = (
    // NOTE: Tailwind does not allow us to dynamically construct classnames, so I could NOT
    //       do: className={`sm:w-[${132}px]`}.  See: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    //       Thus, I'm using inline style for that aspect.
    <span
      style={{ width: `${size}px` }}
      className="hidden h-full sm:inline-block"
    />
  );
  const mainContent =
    !isPlaceholder && src ? (
      <Image
        className="mb-6 rounded-3xl shadow-lg shadow-black/40 sm:mb-0"
        src={src}
        alt="Jason K. Frank"
        placeholder="blur"
        width={size}
        height={size}
        priority
      />
    ) : (
      placeholderElement
    );
  return <div className="not-prose sm:mr-6">{mainContent}</div>;
}

export default HeroAvatar;
