import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Front-end software engineer & UI/UX designer",
};

function AboutPage() {
  return (
    <div>
      <h2 className="!mt-0">Hello again!</h2>
      <div className="h-5" />
      <p>
        {`I'm a `}
        <strong>{`front-end software engineer`}</strong>
        {` and `}
        <strong>{`UI/UX designer`}</strong>.
      </p>
      <p>
        {`I love creating software that is beautiful, innovative, and a joy to
        use.`}
      </p>
      <p>
        {`I'm also a father, husband, athlete, coach, and follower of Christ.
        Perhaps most of all, I'm a work in progress. Always evolving, always
        growing.`}
      </p>
      <div className="h-5" />
      <p>
        {`On this page, I'll expand on this question of who I am by describing /
        providing things like: `}
      </p>

      <ul>
        <li>
          My <Link href="resume-01-2023.pdf">resume</Link>
          <span className="text-gray-400"> (updated 01/2023)</span>
        </li>
        <li>
          Professional skills{" "}
          <span className="italic text-gray-400"> (forthcoming)</span>
        </li>
        <li>
          What inspires me as an engineer and designer?{" "}
          <span className="italic text-gray-400"> (forthcoming)</span>
        </li>
        <li>
          My computer science journey{" "}
          <span className="italic text-gray-400"> (forthcoming)</span>
        </li>
        <li>
          My design journey{" "}
          <span className="italic text-gray-400"> (forthcoming)</span>
        </li>
      </ul>
      <div className="my-16 h-6" />
      <h3>About this site</h3>
      <p>
        {`This is a brand-new site that I'm building up from scratch. So I don't
        yet have all of the content that I have planned included here yet. In
        the interest of "progress over perfection", for now here's a little
        about the site itself.`}
      </p>
      <p>
        {`I'm using `}
        <strong>Next.js v13</strong>
        {` and the new `}
        <code>app</code>
        {` directory paradigm.  This allows us to create nested layouts
            and more.`}
      </p>
      <p>
        {`Note that, as of this writing, the `}
        <code>app</code>
        {` directory constructs in Next.js are in Beta, so I'd love to hear from you if 
          you spot something in this site that doesn't seem to work correctly!`}
      </p>
      <p>
        {`I'm also using `}
        <strong>Tailwind.css</strong>
        {`, including the "Prose" plugin.`}
      </p>

      <p>
        {`For certain animations, I'm using `}
        <strong>Framer Motion</strong>
        {`.  Examples include page transitions, 
          current-nav-link underline animation, and a few "intro animations" for a couple secret pages.`}
      </p>
      <p>
        {`For hosting, I'm using `}
        <strong>Vercel</strong>
        {`. I've previously hosted sites on Firebase hosting and Netlify.
          So far Vercel has worked amazingly well.  For example, it automatically creates preview deployments
          for any of my branches on GitHub.`}
      </p>
      <p>{"Check back soon to see this site (and this page) grow!"}</p>

      {/* 
      TODO: 
        (1) Revisit this once I structure the site/page to be able to display media items wider than
            the text content.
        (2) Set the width and height to a 16:9 aspect ratio so the video renders at the correct ratio
            (also see the video I put on the /webflow page for an example)
      <div className="w-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cl827pK-0oU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
}

export default AboutPage;
