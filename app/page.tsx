import Image from "next/image";
import headshot from "/public/assets/Headshot-2017.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        className="rounded-3xl shadow-lg shadow-black/40"
        src={headshot}
        alt="Jason K. Frank"
        placeholder="blur"
        width={132}
        height={132}
        priority
      />
      <div className="max-w-lg">
        <h2 className="font-normal">Hello!</h2>
        <p>This is a brand-new website...</p>
        <p>
          {`I'm building it up from scratch. Currently I'm using Next.js v13
              and the new `}
          <code>app</code>
          {`directory approach.  This allows us to create nested layouts
            and more.`}
        </p>
        <p>{`I'm also trying-out Tailwind.css.`}</p>
        <p>
          {`I've previously hosted sites on Firebase hosting and Netlify. But
              I'm trying-out Vercel for hosting this time.`}
        </p>
        <p>{"Check back soon to see it grow!"}</p>

        <div className="border-black/15 mt-9 mb-12 w-32 border-b"></div>

        <p>
          {`Oh, and if you'd like to download my `}
          <strong className="font-medium">resume</strong>
          {`, click `}
          <Link href="resume-2022.pdf">here</Link>
          {` (last updated 12/2022).`}
        </p>
      </div>
    </div>
  );
}
