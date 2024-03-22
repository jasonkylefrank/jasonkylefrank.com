"use client";

import { useState } from "react";
import Link from "next/link";
import IntroAnimationOverlay from "./xata-overlay";
import YouTubeVideo, {
  YouTubeSources,
} from "../../../components/youtube-video";
import Avatar from "../../../components/avatar";
import PlusGlyph from "../../../components/icon-glyphs/plus-glyph";
import CompanyLogo from "./xata-logo";
import GameTokenForDescription from "./game-token-for-description";
import { Anchor } from "ui";

export default function XataContent() {
  const [animationCount, setAnimationCount] = useState(0);
  const companyDisplayName = "Xata";
  const companyName = "xata";
  const animationOverlayGitHubPermalink =
    "https://github.com/jasonkylefrank/jasonkylefrank.com/blob/71188050957fe293bb6ef644c0e6dc736724042e/apps/web/app/(no-page-transitions)/xata/xata-overlay.tsx";
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
      <IntroAnimationOverlay animationCount={animationCount} />

      <h1>
        <span className="mr-2">👋🏼</span> Hello {companyDisplayName}!
      </h1>

      {/* <audio src="/assets/music/rock-it.mp3" controls></audio> */}
      <section className="mt-20 mb-20">
        <p>
          {`If you're viewing this page, then you're probably wondering if I'd be a `}
          <strong>good fit as an engineer</strong>{" "}
          {` at ${companyDisplayName}.`}
        </p>
        <p>
          {`I'd love to speak with you soon to discuss this.  But for now, I'll briefly 
          touch on two main aspects which describe why I think I would be a good fit:
          `}
        </p>
        <ol>
          <li>What excites me about joining Xata?</li>
          <li>What do I bring to the table?</li>
        </ol>
        <p>
          {`Finally, I'll wrap-up this page with a fun experiment that tests-out `}
          <strong>Xata edge functions</strong> (workers).
        </p>
      </section>

      <section className="mt-24">
        <h2>What excites me about joining Xata?</h2>
        <h3 className="!mt-12">
          <span className="font-normal">First, </span>
          {`I want to build this product because I want it to exist!`}
        </h3>
        <p>
          {`I have learned that you are solving a real need for front-end developers and even 
          designers.  Because I `}
          <em>am</em>
          {` a front-end developer and UI/UX designer, this means that
          I am the targeted persona!
          `}
        </p>
        <p>
          {`Although I also enjoy using services like Firebase (and its Firestore DB--more on this in a 
          minute), I also wish there was a way to stay within the Vercel ecosystem to create full-stack apps.  
          It appears that Xata can help fill that void.            
          `}
        </p>

        <h3 className="!mt-12">
          <span className="font-normal">Second, </span>
          {`I'm interested in working for a startup that is in an early stage.`}
        </h3>
        <p>
          {`Since I was young, I've had an entrepreneurial spirit.  There's just something about creating a 
          product out of thin air… one which solves a customer need, that excites me!  And I believe that the 
          world becomes a better place when entrepreneurs do what they do!
          `}
        </p>
        <p>
          {`In fact, I decided that I wanted to teach my 2 sons to view the world through the lens of an entrepreneur.  
          To that point, I think you'd enjoy these 2 videos that we made (or at least get a few laughs!), which 
          capture the start of our journey of learning how to become technology entrepreneurs:
          `}
        </p>
        <YouTubeVideo src={YouTubeSources.NextGenEntrep_Ep1} />
        <YouTubeVideo
          className="mt-16"
          src={YouTubeSources.NextGenEntrep_Ep2}
        />
      </section>

      <section className="!mt-28">
        <h2>What will I bring to the table?</h2>
        <section>
          <h3>I make complex things visually understandable</h3>
          <p>
            {`Over the last 11 years, I have designed (UI/UX) and developed user interfaces to solve `}
            <strong>complex project-management workflows and processes</strong>
            {`.  About half of my experience has 
          been on the engineering side and the other half on UI/UX design.            
          `}
          </p>
          <p>
            {`Along the way, I've designed `}{" "}
            <strong>custom visualizations</strong>{" "}
            {`that allow users to understand 
          these processes, to understand the impact of their changes, and more.
          `}
          </p>
          <p>
            {`Since you cater to frontend engineers and even designers, my UI/UX experience will be a great asset 
          to you as you build-out more features in a way that is visually intuitive for your users.
          `}
          </p>
        </section>

        <section>
          <h3>My tech experience</h3>
          <p>
            {`After investigating `}{" "}
            <strong>your tech stack, blog posts, and job description</strong>
            {`, I believe that 
          my tech experience is a natural fit.`}
          </p>
          <section>
            <p>
              {`First, I have an affinity for building sites with `}{" "}
              <strong>Next.js</strong>
              {`, including the new `} <code>v13</code>{" "}
              {` app-directory paradigm.  I love how `}
              <strong>Vercel</strong>
              {` is constantly releasing better ways to create web apps.  From the new nested 
            layouts feature, to the built-in router, to the server-by-default component rendering, to api lambda 
            functions, to edge functions, and more.  
            `}
            </p>
          </section>

          <section>
            <p>
              {`I've also recently learned `} <strong>Tailwind.css</strong>
              {` (in-use in this website), which I see you're using on `}
              <code className="font-normal">xata.io</code>
              {`.  Although I don't yet have direct experience with Chakra (which I see you're using on `}
              <code className="font-normal">app.xata.io</code>
              {`), I do have experience with other component/CSS 
            libraries like MUI (Material UI), Styled Components, and SASS.  Those should give me a good base to 
            quickly learn Chakra.
            `}
            </p>
          </section>

          <section>
            <p>
              {`In the job description, you also mentioned needing experience with a `}{" "}
              <strong>NoSQL database</strong>.
              {` Although I'm no expert at them yet, I have learned how to use Firebase's `}{" "}
              <strong>Firestore DB</strong>
              {` and `} <strong>{`Azure's Cosmos DB`}</strong>
              {` (both are NoSQL databases) to implement side projects.`}
            </p>
            <p>
              {`I loved how easy Cosmos DB made it to tie-in webhook-based services like being able to send SMS 
            messages with the Twilio API when a new record appears in a certain collection.
            `}
            </p>
            <p>
              {`With Firestore, I love the real-time data-subscription capabilities.  This allows me to do things 
            like implement chat capability using only the Firestore JavaScript SDK, with no server-side code other 
            than the Security Rules aspect.
            `}
            </p>
          </section>

          <section>
            <p>
              {`Besides the NoSQL items I mentioned above, I also have `}{" "}
              <strong>Cloud/Serverless</strong>
              {` experience with `} <strong>Vercel</strong>
              {` (hosting, analytics, and soon edge functions), `}
              <strong>Firebase</strong>
              {` (cloud functions, hosting),`} <strong>Azure</strong>
              {` (cloud functions, hosting), and `} <strong>Netlify</strong>{" "}
              {`(hosting).`}
            </p>
            <p>
              {`These services excite me because they allow me to more-easily create small apps which can also scale-up 
              as needed at a low cost.`}
            </p>
          </section>
        </section>
      </section>

      <section className="!mt-28">
        <div className="mb-14 -mt-5">
          <h2>{`Edge function game: "Heal the broken heart!"`}</h2>
        </div>

        <aside className="bg-gray-200 italic rounded py-3 px-4 opacity-70">
          {`NOTE: I originally implemented this experiment using `}
          <strong>{`Xata workers`}</strong>
          {`.  However, Xata decided to stop supporting those.  So I have since converted this game over to `}
          <strong>{`Vercel's Edge Functions.`}</strong>
        </aside>

        <p>
          {`Web developer hearts broke when they saw problems with serverless functions: `}
          <strong>{`cold starts`}</strong>
          {` and `} <strong>{`network latency`}</strong>{" "}
          {` caused by their functions being deployed to a single region. 😞`}
        </p>

        <p>{`But alas, edge functions were created to (hopefully) save the day!`}</p>

        <p>
          {`Edge functions run on an `}
          <em>{`edge network`}</em>
          {`, which is a bit like a CDN for serverless functions 
      (except the runtime is more limited so you can't just deploy `}
          <em>{`any`}</em>
          {` serverless function to the edge).`}
        </p>

        <p>{`Let's test-out the latency and cold-start aspect of an edge network function and get this heart healed!  Heal the heart by moving it out
           of the game board one step at a time.`}</p>
        <p>
          {`With each move, this app will simultenously execute 2 types of moves:`}
        </p>
        <ol>
          <li>
            {`A "local move" heart `}
            <GameTokenForDescription tokenType="local" />
            {` that moves immediately (with a paper-trail effect).`}
          </li>
          <li>
            {`A round-trip network-move heart `}
            <GameTokenForDescription tokenType="network" />
            {` that moves once its network call returns.`}
            <div className="text-black/40">{`  I also added an animation to this move so you can more-easily see it "flow onto" the spot of the local-move heart.`}</div>
          </li>
        </ol>

        <p>
          {`You'll be able to visually see the difference between these two types.  Hopefully the edge function proves more responsive than the serverless function!            
          `}
        </p>
        <p className="text-sm italic text-black/40">
          {`DEVELOPER TIP: Open up the console to see some valuable info printed as you make moves or change network settings.
          `}
        </p>

        <span className="not-prose">
          <hr className="my-10" />
        </span>

        {/* NOTE: Make sure NOT to set a width (even via CSS) directly on the iframe since it does not
                  seem to automatically size-down when the window gets narrow, which screws up all kinds of
                  things on the page! */}
        <div className="h-[720px] mt-12 lg:mx-[-60px] md:mx-[-24px]">
          <iframe
            width="100%"
            height="100%"
            src="https://edge-function-game.jasonkylefrank.com/raw"
          ></iframe>
        </div>
      </section>

      <section className="!mt-28">
        <h2>Putting it all together</h2>

        <p>
          {`I hope this page has shown you that I enjoy creating sleek experiences for users (`}
          <em>you</em>
          {` were that user in this case!). 
          `}
        </p>
        <p>
          {`You want someone like me, who is intentional, loves to innovate, wants to work for a startup, and 
          has experience in technologies that you find valuable, to be on your team!            
          `}
        </p>
        <p>{`Let's talk!`}</p>
        <p>
          <Anchor type="mailto" href={companyEmail} />
        </p>
        <p>
          {`Also see my `}
          <Anchor type="external" href="resume--xata-engineer.pdf">
            resume
          </Anchor>
        </p>
        <hr />
        <p>
          {`P.S.   By the way, did you notice the intro animation sequence when you first 
        loaded this webpage (it only lasts about 2 seconds)?  That's an example of something that
        I saw in my "mind's eye" and drove me to learn new aspects of Framer Motion so that I could 
        implement it.  (Note: you can view the source code of that component on GitHub `}
          <Anchor type="external" href={animationOverlayGitHubPermalink}>
            here
          </Anchor>
          {`).`}
        </p>
        <p>
          {`Just for fun, you should click `}
          <Anchor type="internal" onClick={handleRestartIntroAnimationClick}>
            here
          </Anchor>
          {` to see that animation again!`}
        </p>
      </section>

      <div className="mt-32 mb-12 flex items-center justify-center gap-12">
        <CompanyLogo className={`${logoSizeClasses}`} wingsFill="#444444" />
        <PlusGlyph className="h-12 w-12 fill-black opacity-30" />
        <Avatar className={`${logoSizeClasses} rounded-full`} />
      </div>
    </div>
  );
}
