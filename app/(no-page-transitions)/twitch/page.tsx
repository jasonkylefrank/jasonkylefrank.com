import TwitchContent from "./twitch-content";

// Only works in server components
export const metadata = {
  title: "Twitch",
  description: "Why I'm a good fit for Twitch!",
};

export default function Twitch() {
  return (
    // I can't put the content of this component in this component directly because the Metadata API can only be used in server components.
    //  But this content needs to be a client component.
    <TwitchContent />
  );
}
