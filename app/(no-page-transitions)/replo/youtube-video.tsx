import classNames from "classnames";

export default function YouTubeVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className={classNames("h-[290px] w-full sm:h-[416px]", className)}>
      <iframe
        // width="560"
        // height="315"
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
