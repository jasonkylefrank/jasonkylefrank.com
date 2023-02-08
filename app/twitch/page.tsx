import TwitchLogo from "./twitch-logo";

export const metadata = {
  title: "Twitch",
  description: "Why I'm a good fit for Twitch!",
};

export default function Twitch() {
  const twitchEmail = "twitch@jasonkylefrank.com";
  return (
    <div className="bg-[#9147FF]">
      <TwitchLogo />
      <h1>Hello Twitch!</h1>

      <p>{`Why am I interested in joining Twitch?`}</p>
      <p>{`Glad you asked!`}</p>
      <p>
        {`I'd like to describe that with the following `}
        <strong>short video</strong>
      </p>
      <p>(Video coming soon)</p>
      <hr />
      <p>...</p>
      <ul>
        <li>{`...`}</li>
        <li>{`...`}</li>
        <li>{`...`}</li>
      </ul>
      <p>{`Let's talk!`}</p>
      <p>
        <a href={`mailto:${twitchEmail}`}>{twitchEmail}</a>
      </p>
    </div>
  );
}
