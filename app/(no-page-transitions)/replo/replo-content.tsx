"use client";

import { useState } from "react";
import Image from "next/image";
import addToCartInteractionPic from "public/assets/replo/add-to-cart-interaction.png";
import oneOnOneEmailFromYuxin from "public/assets/replo/1-on-1-email.png";
import IntroAnimationOverlay from "./replo-overlay";
import YouTubeVideo from "./youtube-video";
import Avatar from "./avatar";
import PlusIcon from "./plus-icon";
import ReploLogo from "./replo-logo";

export default function ReploContent() {
  const [animationCount, setAnimationCount] = useState(0);
  const companyName = "replo";
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
        <span className="mr-2">👋🏼</span> Hello Replo!
      </h1>

      {/* <audio src="/assets/music/rock-it.mp3" controls></audio> */}
      <section className="mt-20 mb-20">
        <p>
          {`If you're viewing this page, then you're probably wondering if I'd be a `}
          <strong>good fit as an engineer</strong> {` at Replo!`}
        </p>
        <p>
          {`I'd love to speak with you soon to discuss this!  But for now (to wet your appetite) 
          I'll briefly describe the following reasons why I think I would be a good fit:
          `}
        </p>

        <ol>
          <li>
            {`My `}
            <strong>tech and design experience</strong>
            {` are a natural fit for Replo`}
          </li>
          <li>
            {`I love `}
            <strong>innovating</strong>
          </li>
          <li>
            {`I either want to `}
            <strong>found my own startup or work for a founder</strong>
            {` of one`}
          </li>
          <li>
            {`I believe you have `}
            <strong>ingredients for success</strong>
            {` (but even more with me!)`}
          </li>
        </ol>
      </section>

      <h3>{`My tech and design experience are a natural fit`}</h3>

      <p>
        {`First, I have an affinity for `}
        <strong>Next.js</strong>
        {`, including the new `}
        <code>v13</code>
        {` app-directory paradigm.  
        I love how `}
        <strong>Vercel</strong>
        {` is constantly releasing better ways to create web apps.  From the new nested layouts 
        feature, to the server-by-default component rendering, to api lambda functions, to edge functions, and more.  
          `}
      </p>

      <p>
        {`I've also recently learned `}
        <strong>Tailwind.css</strong>
        {` (in-use in this website), which I see you're using on both `}
        <code className="font-normal">dashboard.replo.app</code> and{" "}
        <code className="font-normal">replo.app</code>
        {`.`}
      </p>

      <p>
        {`But I'm not just a software engineer.  About half of my 11 years of full-time experience has been doing `}
        <strong>UI/UX design.</strong>
      </p>

      <p>
        {`As such, I am very experienced in `}
        <strong>Figma</strong>
        {`, and before that `}
        <strong>Sketch</strong>
        {` and InVision.`}
      </p>

      <p>
        {`With my combination of `}
        <strong>engineering</strong>
        {` and `}
        <strong>design experience</strong>
        {`, I'm a `}
        <strong>natural fit</strong>
        {` for helping you build-out more features in the Replo app, or maybe even Replo UI!`}
      </p>

      <h3>{`I love innovating`}</h3>

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

      <h3>{`A founder connection`}</h3>

      <p>
        {`I either want to `}
        <strong>found</strong>
        {` my own startup or `}
        <strong>work for a founder</strong>
        {` of one.`}
      </p>
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

      {/* Episode 1: */}
      <YouTubeVideo src="https://www.youtube.com/embed/cl827pK-0oU" />
      {/* Episode 2: */}
      <YouTubeVideo
        className="mt-16"
        src="https://www.youtube.com/embed/gIE4lB2TPvc"
      />

      <section className="!mt-24">
        <h3>{`You have ingredients for success (but even more with me!)`}</h3>
        <p>
          {`In the previous section I said that I wanted to either found my own startup or work for a 
          founder of one.  So why Replo and not some other startup?
          `}
        </p>
        <p>
          {`In the first section I talked about how my experiences and skills are a natural fit for the
           visual-nature of Replo's products.  So that's one huge reason.
          `}
        </p>
        <p>
          {`But another aspect that made me choose Replo is that I'm seeing ingredients for success:
          `}
        </p>
      </section>

      <section>
        <h4>{`The "Why now?" test`}</h4>
        <p>
          {`I remember hearing YC folks talk about how you need to be able to answer the question,
           "Why is now the only time in history when this company could succeed?"  
          `}
        </p>
        <p>
          {`For Replo, it's pretty clear that 2021 was that time.  The pandemic caused a boom in 
          ecommerce and  Shopify storefronts.  But Replo noticed a gap in the area of easily designing 
          those storefronts.
          `}
        </p>
      </section>

      <section>
        <h4>
          {`Your product has `}
          <strong>focus</strong>
        </h4>
        <p>
          {`YC is also known for pointing-out that for a new player to beat-out the incumbents, they have 
          to focus on a very specific persona need, and build something 10x better for them.  From what I've 
          seen so far, your product has that kind of focus.  For example, one of your built-in interactions 
          is the “Add Product to Cart” action:
          `}
        </p>
        <Image
          className="ml-auto mr-auto max-h-64 w-auto rounded-md shadow-jason30"
          src={addToCartInteractionPic}
          alt="Add to cart interaction screenshot"
        />
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
          {`What I've noticed so far is that Yuxin is very involved in talking to Replo users.  I listened to a podcast 
          episode (on the "What is my brain" podcast) where he described being surprised that there are now customers that he doesn't
          know (he was surprised since he generally talked to all of them!).              
          `}
        </p>
        <p>
          {`Additionally, I've noticed how intentional Yuxin is about proactively engaging users.  For example, this auto-generated
           email invites new users to schedule a 1-on-1 with him:`}
        </p>

        <Image
          className="max-h-92 ml-auto mr-auto w-auto rounded-md shadow-jason30"
          src={oneOnOneEmailFromYuxin}
          alt="One-on-one email invite screenshot"
        />
      </section>

      <section className="!mt-24">
        <h3>Putting it all together</h3>

        <p>
          {`While it is clear that Yuxin is very intentional about talking to users, I hope you are starting to see that I am
          pretty intentional myself!  And I recognize the pieces that you are forming toward a successful startup.
          `}
        </p>
        <p>
          {`You want someone like me, who is intentional, loves to innovate, wants to found or work for a founder, and has a 
          "natural fit" background on your team!
          `}
        </p>

        <p>{`Let's talk!`}</p>
        <p>
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>
      </section>

      <div className="mt-28 mb-12 flex items-center justify-center gap-12">
        <ReploLogo className={`${logoSizeClasses} !fill-gray-700`} />
        <PlusIcon className="h-12 w-12 fill-black opacity-30" />
        <Avatar className={`${logoSizeClasses} rounded-xl`} />
      </div>
    </div>
  );
}
