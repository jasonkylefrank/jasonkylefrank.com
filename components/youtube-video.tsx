import classNames from "classnames";

export enum YouTubeSources {
  NextGenEntrep_Ep1 = "https://www.youtube.com/embed/cl827pK-0oU",
  NextGenEntrep_Ep2 = "https://www.youtube.com/embed/gIE4lB2TPvc",
}

type YouTubeSourceType = YouTubeSources | string;

export default function YouTubeVideo({
  src,
  className,
}: {
  src: YouTubeSourceType;
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
