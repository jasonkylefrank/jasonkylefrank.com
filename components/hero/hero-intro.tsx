import HeroAvatar from "./hero-avatar";
import headshot from "/public/assets/Headshot-2017.png";

function HeroIntro() {
  return (
    <div className="not-prose flex flex-col sm:flex-row">
      <HeroAvatar src={headshot} />

      <h1 className="m-auto flex flex-col">
        <span className="text-sm sm:text-base">{`Hi, I'm`}</span>
        <span className="text-3xl font-semibold sm:text-4xl">{`Jason K. Frank`}</span>
        <span className="mt-0.5 text-sm opacity-70 sm:text-base ">{`Front-end engineer & UI/UX designer`}</span>
      </h1>
    </div>
  );
}

export default HeroIntro;
