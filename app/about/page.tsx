import Link from "next/link";

function AboutPage() {
  return (
    <div>
      <h1>Hello again!</h1>
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
          My <Link href="resume-2022.pdf">resume</Link>
          <span className="text-gray-400"> (updated 12/2022)</span>
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
        {`I'm using Next.js v13 and the new `}
        <code>app</code>
        {` directory approach.  This allows us to create nested layouts
            and more.`}
      </p>
      <p>
        {`Note that the `}
        <code>app</code>
        {` directory constructs in Next.js are in Beta, so I'd love to hear from you if 
          you spot something in this site that doesn't seem to work correctly!`}
      </p>
      <p>{`I'm also trying-out Tailwind.css, including the "Prose" plugin.`}</p>
      <p>{`By the time you read this, I'll hopefully have some page transitions and other animation working via Framer Motion.`}</p>
      <p>
        {`For hosting, I'm trying-out Vercel. I've previously hosted sites on Firebase hosting and Netlify.
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
