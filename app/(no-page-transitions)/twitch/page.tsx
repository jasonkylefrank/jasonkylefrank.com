"use client";

import { useState } from "react";
import TwitchOverlay from "./twitch-overlay";

export const metadata = {
  title: "Twitch",
  description: "Why I'm a good fit for Twitch!",
};

export default function Twitch() {
  const [animationCount, setAnimationCount] = useState(0);
  const animationOverlayGitHubURL =
    "https://github.com/jasonkylefrank/jasonkylefrank.com/blob/main/app/(no-page-transitions)/twitch/twitch-overlay.tsx";
  const twitchEmail = "twitch@jasonkylefrank.com";

  function handleRestartIntroAnimationClick(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    e.preventDefault();
    setAnimationCount((prev) => prev + 1);
  }

  return (
    <div>
      <TwitchOverlay animationCount={animationCount} />

      <h1>Hello Twitch!</h1>

      {/* <audio src="/assets/music/rock-it.mp3" controls></audio> */}
      <section className="mt-20 mb-20">
        <p>
          {`If you're viewing this page, then you're probably wondering if I'd be a good fit for the `}
          <strong>design technologist role</strong> {` at Twitch.`}
        </p>

        <p>{`On this page, I'll describe the following reasons why I would be a good fit:`}</p>

        <ol>
          <li>{`I am equal parts software engineer and UI/UX designer`}</li>
          <li>{`I love prototyping`}</li>
          <li>{`I understand video creators`}</li>
        </ol>
      </section>

      <h3>{`I am equal parts software engineer and UI/UX designer`}</h3>

      <p>
        {`After earning my Masters in Computer Science in 2011, I began working as a full-time 
          software engineer.  Since that time, about half of my experience has been on the engineering 
          side, and the other half on UI/UX design.  In this way, I've worked on "both sides of the 
          aisle".  So I intimately understand the struggles that are involved in the process of 
          iterating on ideas and getting them fully implemented without losing the intent of the 
          design.
          `}
      </p>

      <h3>{`I love prototyping`}</h3>

      <p>
        {`I love pushing the boundary of current solutions.  I love how it engages my imagination.
        `}
      </p>

      <p>
        {`Speaking of imagination, did you notice the intro animation sequence when you first 
        loaded this webpage (it only lasts about 2 seconds)?  That's an example of something that
        I saw in my "mind's eye" and drove me to learn new aspects of Framer Motion so that I could 
        implement it.  (Note: you can view the source code of that component on GitHub `}
        <a href={animationOverlayGitHubURL} target="_blank" rel="noreferrer">
          here
        </a>
        {`).`}
      </p>
      <p>
        {`Just for fun, you should click `}
        <a
          className="cursor-pointer"
          onClick={handleRestartIntroAnimationClick}
        >
          here
        </a>{" "}
        {` to see that animation again!`}
      </p>

      <h3>{`I understand video creators`}</h3>

      <p>
        {`Another reason that I would be a great asset for Twitch is that I have a history and 
        personal connection with video creation.  
        `}
      </p>
      <p>
        First, I <em>am</em> a video creator.
      </p>
      <p>
        {`My undergraduate degree was in Mass Communications with a specialization in broadcasting.  
        That education gave me experience creating everything from commercials to music videos to dramatic 
        films.
        `}
      </p>
      <p>
        {`My first full-time job out of college was as a recording studio engineer, where I recorded all 
        instruments and vocals and mixed them into final production albums (this was an earlier career 
        before I changed to software engineering).  
        `}
      </p>

      <p>
        {`In more-recent years, I've produced videos on creativity and entrepreneurship on my YouTube 
        channel.  I think you'd enjoy this example where my 2 sons and I captured the start of a journey 
        to learn how to become tech entrepreneurs:
        `}
      </p>

      <div className="h-[290px] w-full sm:h-[416px]">
        <iframe
          // width="560"
          // height="315"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cl827pK-0oU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <section className="!mt-20">
        <h3>{`The apple doesn't fall far from the tree`}</h3>
        <p>
          {`Speaking of my 2 sons, my older son now wants to start his own video channel (possibly on 
          YouTube and/or Twitch).
          `}
        </p>
        <p>
          {`And that brings me to the "personal connection" to video creators.  I want to help design 
          and build the future for him as a video creator/streamer.  I want him to have a platform that 
          is safe, engaging, and fun.  I think that designing and building features for Twitch and 
          Interactive Video Service (IVS) will allow me to do that.
          `}
        </p>
      </section>

      <h3>Putting it all together</h3>

      <p>
        {`Because I've worked on "both sides of the aisle", love prototyping, and understand video 
        creators, I believe I'd be a great fit for the design technologist role at Twitch.
        `}
      </p>
      <p>
        {`There's one more thing I'll leave you with.
        `}
      </p>
      <p>
        {`Throughout my journey as a designer and engineer, I've seen design trends evolve, technologies 
        emerge and fade, and processes change. What hasn't changed, for me, is the joy and wonder that 
        comes from being a creator.
        `}
      </p>
      <p>
        {`This is why about a year ago I updated my LinkedIn "headline" to include the phrase, "Imagining 
        & building the future".  My emphasis here is that I am not just a "React developer" or "Figma 
        designer", or even "Frontend engineer".  I am a creator that will use whatever tool is needed to 
        create what I see in my mind's eye.  This also means that I understand that resourcefulness is more 
        important than resources.  That, as Einstein said, "Knowledge is limited. Imagination encircles the 
        world."
        `}
      </p>

      <p>{`Let's talk!`}</p>
      <p>
        <a href={`mailto:${twitchEmail}`}>{twitchEmail}</a>
      </p>
    </div>
  );
}
