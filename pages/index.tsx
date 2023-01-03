import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import headshot from "/public/assets/Headshot-2017.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// TODO: Consider finding a variable-weight font so I don't need to specify the weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason K. Frank</title>
        <meta name="description" content="Jason K Frank's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={poppins.className}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src={headshot}
              alt="Jason K. Frank"
              placeholder="blur"
              width={132}
              height={132}
              priority
            />
          </div>
          <div style={{ maxWidth: 360, textAlign: "center" }}>
            <p style={{ fontSize: "1.5rem" }}>Hello!</p>
            <p>This is a brand-new website...</p>
            <p>
              {`I'm building it up from scratch. Currently I'm using Next.js v13
              and set up MDX so I can write some of the content in Markdown
              while also injecting React components into the Markdown files.`}
            </p>
            <p>
              {`I've previously hosted sites on Firebase hosting and Netlify. But
              I'll trying-out Vercel for hosting this time.`}
            </p>
            <p>Check back soon to see it grow!</p>
            <div
              className="separator"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.14)",
                margin: "36px 48px",
              }}
            ></div>
            <p>
              Oh, and if you'd like to download my <strong>resume</strong> (as
              of 2022), click &nbsp;
              <Link href="resume-2022.pdf">here</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
