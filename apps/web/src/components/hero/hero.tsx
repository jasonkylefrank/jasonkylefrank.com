import HeroIntro from "./hero-intro";
import HeroStatement from "./hero-statement";

export default function Hero() {
  return (
    <section className="grid justify-items-start space-y-24">
      <HeroIntro />
      <HeroStatement />
    </section>
  );
}
