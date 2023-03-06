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

export default function XataContent() {
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
        <h2>{`Xata workers experiment: "Free the butterfly!"`}</h2>

        <p>{`The Xata butterfly is trapped and needs your help!`}</p>
        <p>
          {`She was flying around the internet and got caught between Vercel's edge functions and Xata's new 
          (edge) worker functions.`}
        </p>
        <p>
          {`You can free her by moving her one step at a time.  With each move, a call to either Xata's or Vercel's edge 
          functions will be made to test-out the latency of these services and move her toward the exit.  You'll be able 
          to visually see the difference between a “local move” (immediate) and the move that comes back from the edge 
          function.  Hopefully the difference is pretty small!            
          `}
        </p>

        <h4>{`NOTE: This experiment is coming soon... `}</h4>
        <p>
          {`  Check back soon or email me to get notified when I have it ready: `}
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>

        <iframe
          className="h-[440px] w-[960px] max-w-3xl"
          src="https://xata-game.jasonkylefrank.com/raw"
        ></iframe>
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
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>
        <p>
          {`Also see my `}
          <Link href="resume--xata-engineer.pdf">resume</Link>
        </p>
        <hr />
        <p>
          {`P.S.   By the way, did you notice the intro animation sequence when you first 
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
      </section>

      <div className="mt-32 mb-12 flex items-center justify-center gap-12">
        <CompanyLogo className={`${logoSizeClasses}`} wingsFill="#444444" />
        <PlusGlyph className="h-12 w-12 fill-black opacity-30" />
        <Avatar className={`${logoSizeClasses} rounded-full`} />
      </div>
    </div>
  );
}
