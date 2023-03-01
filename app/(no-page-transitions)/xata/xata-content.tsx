"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import IntroAnimationOverlay from "./replo-overlay";
import YouTubeVideo, {
  YouTubeSources,
} from "../../../components/youtube-video";
import Avatar from "../../../components/avatar";
import PlusIcon from "../../../components/icons/plus-icon";
import CompanyLogo from "./xata-logo";

export default function ReploContent() {
  const [animationCount, setAnimationCount] = useState(0);
  const companyDisplayName = "Xata";
  const companyName = "xata";
  const animationOverlayGitHubURL = `https://github.com/jasonkylefrank/jasonkylefrank.com/blob/main/app/(no-page-transitions)/${companyName}/${companyName}-overlay.tsx`;
  const companyEmail = `${companyName}@jasonkylefrank.com`;

  function handleRestartIntroAnimationClick(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    e.preventDefault();
    setAnimationCount((prev) => prev + 1);
  }

  const logoSizeClasses = "h-[64px] w-[64px] sm:h-[88px] sm:w-[88px]";

  return (
    <div>
      {/* <IntroAnimationOverlay animationCount={animationCount} /> */}

      <h1>
        <span className="mr-2">👋🏼</span> Hello {companyDisplayName}!
      </h1>

      {/* <audio src="/assets/music/rock-it.mp3" controls></audio> */}
      <section className="mt-20 mb-20">
        <p>
          {`If you're viewing this page, then you're probably wondering if I'd be a `}
          <strong>good fit as an engineer</strong> {` at ${companyDisplayName}`}
        </p>
        <p>
          {`I'd love to speak with you soon to discuss this!  ...
          `}
        </p>
      </section>

      <section>
        <h3>Free the butterfly!</h3>
        <p>...</p>
        <h4>{`NOTE: This demo is coming soon... `}</h4>
        <p>
          {`I'm currently waiting on an invite to the private Beta for 
           Xata Workers so I can implement this.  Check back soon or email me to get notified when I have it ready: `}
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>
        <section>
          <div>upward arrow</div>
          {/* <div className="grid grid-cols-3"> */}
          <div className="grid grid-cols-[auto_1fr_auto]">
            <span>leftward arrow</span>
            <span className="relative h-72 w-96 rounded-lg bg-gray-800 text-white">
              <span className="absolute top-[calc(50%-24px)] left-[calc(50%-24px)]">
                <CompanyLogo className="h-[40px]" wingsFill="#bbbbbb" />
              </span>
            </span>
            <span>rightward arrow</span>
          </div>
          <div>downward arrow</div>
        </section>
      </section>

      <section>
        <h3>
          I want to work for a startup{" "}
          <span className="font-normal opacity-50">
            {" "}
            (and perhaps start my own eventually)
          </span>
        </h3>
        <p>...</p>
        <YouTubeVideo src={YouTubeSources.NextGenEntrep_Ep1} />
        <YouTubeVideo
          className="mt-16"
          src={YouTubeSources.NextGenEntrep_Ep2}
        />
      </section>

      <section className="!mt-24"></section>

      <section>
        <h4>{`The "Why now?" test`}</h4>
        <p>
          {`...
          `}
        </p>
      </section>

      <section>
        <h4>
          {`Your product has `}
          <strong>focus</strong>
        </h4>
        <p>
          {`...
          `}
        </p>
      </section>

      <section className="!mt-24">
        <h4>
          {`You're intentional about `}
          <strong>listening to customers</strong>
        </h4>
        <p>
          {`Another thing I've heard YC talk about a lot is that early founders should focus heavily on two things:
          `}
        </p>
        <ol>
          <li>Building product</li>
          <li>Talking to users</li>
        </ol>

        <p>
          {`...        
          `}
        </p>
      </section>

      <section className="!mt-24">
        <h3>Putting it all together</h3>

        <p>
          {`...
          `}
        </p>

        <p>{`Let's talk!`}</p>
        <p>
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>
        <p>
          {`Also see my `}
          <Link href="resume--TODO.pdf">resume (TODO)</Link>
        </p>
      </section>

      <div className="mt-28 mb-12 flex items-center justify-center gap-12">
        <CompanyLogo className={`${logoSizeClasses}`} wingsFill="#444444" />
        <PlusIcon className="h-12 w-12 fill-black opacity-30" />
        <Avatar className={`${logoSizeClasses} rounded-full`} />
      </div>
    </div>
  );
}
