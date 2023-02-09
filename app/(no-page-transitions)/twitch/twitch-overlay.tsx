import TwitchLogo from "./twitch-logo";

export default function TwitchOverlay() {
  return (
    // <div className="absolute top-0 left-0 right-0 z-50 grid h-full bg-[#9147FF]">
    <div className="fixed top-0 left-0 right-0 z-50 grid h-full bg-[#9147FF]">
      <h2>Twitch overlay</h2>
      <TwitchLogo className="w-[124px]" />
    </div>
  );
}
